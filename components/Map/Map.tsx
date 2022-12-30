import React, { useState, useEffect, createRef } from "react";

import { IMap } from "../../types/IMap";
import { mapPreferences } from "../../utils/mapPreferences";

export const Map = ({ className, children, centre, zoom }: IMap) => {
    //* Create ref for map's div element
    const ref = createRef<HTMLDivElement>();

    //* Create map state
    const [map, setMap] = useState<google.maps.Map | null>(null);

    //* Set a new Map using the current ref, centre, and zoom
    useEffect(() => {
        setMap(
            new window.google.maps.Map(ref.current!, {
                // TODO secure map id
                mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
            }),
        );
    }, []);

    if (map) {
        //* Set the centre and zoom of the map
        map.setCenter(centre);
        map.setZoom(zoom);

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
