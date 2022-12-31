import { useState, useEffect, useCallback } from "react";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { IMapPreference } from "../../types/IMap";
import { ILandmark } from "../../types/ILandmark";
import { mapPreferences } from "../../utils/mapPreferences";

import { Map } from "./Map";
import { Marker } from "./Marker";

import landmarksJson from "../../json/landmarks.json";

const DEFAULT_MAP_PREFERENCES = {
    centre: {
        lat: 43.7427794,
        lng: -79.5286326,
    },
    zoom: 8,
};

export const RenderMap = () => {
    // TODO change method of fetching data
    const markers = landmarksJson as unknown as ILandmark[];

    //* Initialize the centre and zoom of the map, and set to default values
    const [centre, setCentre] = useState<IMapPreference["centre"]>(DEFAULT_MAP_PREFERENCES.centre);
    const [zoom, setZoom] = useState<IMapPreference["zoom"]>(DEFAULT_MAP_PREFERENCES.zoom);

    const setMapCentreZoom = useCallback(() => {
        //* Get map preferences from localStorage
        const storedMapPreferences = mapPreferences.get();

        //* Set map centre if found in localStorage
        if (storedMapPreferences?.mapLat && storedMapPreferences?.mapLng)
            setCentre({ lat: storedMapPreferences.mapLat, lng: storedMapPreferences.mapLng });

        //* Set map zoom if found in localStorage
        if (storedMapPreferences?.mapZoom) setZoom(storedMapPreferences.mapZoom);
    }, [setCentre, setZoom]);

    //* Run once on page load to set map centre and zoom
    useEffect(() => {
        setMapCentreZoom();
    }, [setMapCentreZoom]);

    const handleMapStatus = (status: Status) => {
        switch (status) {
            default:
            case Status.LOADING:
                // TODO add Loading component
                return <div>Loading...</div>;
            case Status.FAILURE:
                // TODO add Failure component
                return <div>Failed to load...</div>;
            case Status.SUCCESS:
                return (
                    <Map centre={centre} zoom={zoom}>
                        {markers.map((marker) => (
                            <Marker key={marker.id} position={marker.position} landmark={marker} />
                        ))}
                    </Map>
                );
        }
    };
    // TODO secure api key
    return <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""} render={handleMapStatus} version='beta' libraries={["marker"]} />;
};
