import { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import styles from "../../styles/components/Marker.module.css";
import { IMarker } from "../../types/IMap";

import { MarkerContent } from "./MarkerContent";
import { CustomOverlay } from "./CustomOverlay";

export const Marker = ({ map, position, displayMarker, landmark }: IMarker) => {
    // * Initialize state for custom marker
    const [marker, setMarker] = useState<google.maps.OverlayView | null>(null);

    // * Content to be displayed for each respective marker
    const markerContainer = document.createElement("div");
    markerContainer.classList.add(styles.markerCustom);

    // * Even with custom extension of OverlayView class, can only use static HTML elements
    markerContainer.innerHTML = renderToStaticMarkup(<MarkerContent landmark={landmark} />);

    // HACK: violates React principles
    // * Using React's createRoot and render methods allows for having interactive JSX components in OverlayView
    // * Can't use it because there should not be multiple instances of createRoot and root.render()
    // * Must be a correct way to do this since it clearly works with this incorrect method
    // const markerContentRoot = createRoot(markerContainer);
    // markerContentRoot.render(<MarkerWindow landmark={landmark} />);

    useEffect(() => {
        if (!position) return;

        // * Set state for custom marker with the position and content
        setMarker(CustomOverlay({ position: position, windowContent: markerContainer }));
    }, []);

    // * If marker is not to be displayed, then setMap of marker to null
    // * This will trigger the marker.onRemove() method
    if (marker && !displayMarker) marker.setMap(null);

    // * If marker is to be displayed then setMap of marker to map instance
    // * This will trigger the marker.onAdd() method
    if (map && marker && displayMarker) marker.setMap(map);

    return null;
};
