import { useState, useEffect, useCallback } from "react";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { LayoutGroup } from "framer-motion";

import { IRenderMap } from "../../types/IRenderMap";
import { ILayerState } from "../../types/ILayerState";
import { IMapPreference } from "../../types/IMap";
import { ITheme } from "../../types/ITheme";

import { mapPreferences } from "../../lib/mapPreferences";
import { DEFAULT_MAP_PREFERENCES, DEFAULT_LAYER_STATE } from "../../lib/MAP_DEFAULTS";
import { mapStyleArrays } from "../../lib/mapStyleArrays";
import { withLocalStorage } from "../../lib/withStorage";

import { Map } from "./Map";
import { Marker } from "./Marker";
import { Loading } from "../Loading";
import { MapLayers } from "./MapLayers";
import { MapStyles } from "./MapStyles";

export const RenderMap = ({ markers }: IRenderMap) => {
    // * Initialize state for style of map & set to default
    const [mapStyle, setMapStyle] = useState<google.maps.MapOptions["styles"]>(mapStyleArrays.default);

    // * Initialize all layers to be displayed by default
    const [layerState, setLayerState] = useState<ILayerState>(DEFAULT_LAYER_STATE);

    // * Initialize the centre and zoom of the map, and set to default values
    const [centre, setCentre] = useState<IMapPreference["centre"]>(DEFAULT_MAP_PREFERENCES.centre);
    const [zoom, setZoom] = useState<IMapPreference["zoom"]>(DEFAULT_MAP_PREFERENCES.zoom);

    // * Function to set the map centre and zoom of the map from Local Storage
    const setMapCentreZoom = useCallback(() => {
        //* Get map preferences from Local Storage
        const storedMapPreferences = mapPreferences.get();

        //* Set map centre if found in Local Storage
        if (storedMapPreferences?.mapLat && storedMapPreferences?.mapLng)
            setCentre({ lat: storedMapPreferences.mapLat, lng: storedMapPreferences.mapLng });

        //* Set map zoom if found in Local Storage
        if (storedMapPreferences?.mapZoom) setZoom(storedMapPreferences.mapZoom);
    }, [setCentre, setZoom]);

    //* Run once on page load to set map centre and zoom
    useEffect(() => {
        setMapCentreZoom();
    }, [setMapCentreZoom]);

    //* On page load, if theme is set to dark then set default map style to dark
    useEffect(() => {
        const theme = withLocalStorage.getItem("landmarks-theme") as unknown as ITheme["theme"];
        if (theme === "dark") setMapStyle(mapStyleArrays.dark);
    }, []);

    // * Function to initialize and render the map and respective map loading/map error components
    const handleMapStatus = (status: Status) => {
        switch (status) {
            default:
            case Status.LOADING:
                return <Loading />;
            case Status.FAILURE:
                return <div className='mt-[10vh]'>Failed to load Google Maps...Please try to refresh the page.</div>;
            case Status.SUCCESS:
                return (
                    <Map centre={centre} zoom={zoom} styles={mapStyle}>
                        {markers.map((marker) => (
                            <Marker key={marker._id} position={marker.position} displayMarker={layerState[marker.type]} landmark={marker} />
                        ))}
                    </Map>
                );
        }
    };
    // TODO secure api key
    return (
        <>
            <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""} render={handleMapStatus} />
            <LayoutGroup>
                <div className='absolute top-2 flex justify-center items-start gap-2 w-full'>
                    <MapStyles setMapPreferences={setMapCentreZoom} setMapStyle={setMapStyle} />
                    <MapLayers setMapPreferences={setMapCentreZoom} setLayerState={setLayerState} />
                </div>
            </LayoutGroup>
        </>
    );
};
