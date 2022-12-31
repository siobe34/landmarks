import { renderToStaticMarkup } from "react-dom/server";

import styles from "../../styles/components/Marker.module.css";
import { IMarker } from "../../types/IMap";
import { showMarker } from "../../utils/showMarker";
import { hideMarker } from "../../utils/hideMarker";

import { MarkerContent } from "./MarkerContent";
import { CustomOverlay } from "./CustomOverlay";

export const Marker = ({ map, position, landmark }: IMarker) => {
    if (!map || !position) return null;

    // * Content to be displayed for each respective marker
    const markerContent = document.createElement("div");
    markerContent.classList.add(styles.markerCustom);

    // * Even with custom extension of OverlayView class, can only use static HTML elements
    markerContent.innerHTML = renderToStaticMarkup(<MarkerContent landmark={landmark} />);

    // HACK: violates React principles
    // * Using React's createRoot and render methods allows for having interactive JSX components in OverlayView
    // * Can't use it because there should not be multiple instances of createRoot and root.render()
    // * Must be a correct way to do this since it clearly works with this incorrect method
    // const markerContentRoot = createRoot(markerContent);
    // markerContentRoot.render(<MarkerWindow landmark={landmark} />);

    // * Initialize custom marker with the position and content
    const marker = CustomOverlay({ position: position, markerDiv: markerContent });

    // * Set map instance for the marker
    // * This will trigger the marker.onAdd() method
    marker.setMap(map);

    // * When a marker is clicked, hide any other active markers and show the clicked marker
    ["click", "touchenter"].forEach((domEvent) =>
        markerContent.querySelector("#marker-icon")?.addEventListener(domEvent, () => {
            // * Show the currently clicked marker's pop-up window
            showMarker(markerContent, styles.active);

            // * Pan the map to the position of the marker so that the marker is in the centre of the screen
            map.panTo(position);
        }),
    );

    // * Bind event listener to the 'close' button element in the marker's pop-up window
    markerContent.querySelector("#btn-close")?.addEventListener("click", () => hideMarker(markerContent, styles.active));

    // * Event listener to hide all markers when map is clicked
    ["click", "touchenter"].forEach((domEvent) =>
        map.addListener(domEvent, () => {
            hideMarker(markerContent, styles.active);
        }),
    );

    return null;
};
