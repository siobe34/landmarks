import React, { useState, useEffect, createRef } from "react";

import { IMap } from "../../types/IMap";
import { mapPreferences } from "../../utils/mapPreferences";
import { DEFAULT_MAP_OPTIONS } from "../../utils/MAP_DEFAULTS";

export const Map = ({ className, children, centre, zoom, styles }: IMap) => {
    //* Create ref for map's div element
    const ref = createRef<HTMLDivElement>();

    //* Create map state
    const [map, setMap] = useState<google.maps.Map | null>(null);

    //* Set a new Map using the current ref, centre, and zoom
    useEffect(() => {
        setMap(new window.google.maps.Map(ref.current!));
    }, []);

    if (map) {
        //* Set the centre and zoom of the map
        map.setCenter(centre);
        map.setZoom(zoom);

        // * Set default map options
        map.setOptions({ ...DEFAULT_MAP_OPTIONS, styles: styles });

        //* Add an event listener to save the map centre to Local Storage every time the map is panned
        map.addListener("center_changed", () => {
            const currentCentre = map.getCenter();
            if (currentCentre) mapPreferences.set({ lat: currentCentre.lat(), lng: currentCentre.lng() });
        });

        //* Add an event listener to save the map zoom to Local Storage every time the zoom changes
        map.addListener("zoom_changed", () => {
            const currentZoom = map.getZoom();
            // * 'undefined' is passed since mapPreferences.set takes arguments for centre and zoom but centre is undefined in this case
            if (currentZoom) mapPreferences.set(undefined, currentZoom);
        });
    }

    //* Return the map instance
    //* id of 'map' is required for Google Maps JS API
    //* setting the height and width is also important to avoid weird google style issues on the map container
    return (
        <div ref={ref} id='map' className={`${className} w-full h-full`}>
            {React.Children.map(children, (child: React.ReactElement) => {
                return React.cloneElement(child, { map });
            })}
        </div>
    );
};
