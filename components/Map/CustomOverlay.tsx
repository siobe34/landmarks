import styles from "../../styles/components/Marker.module.css";

import { ICustomOverlay } from "../../types/ICustomOverlay";
import { showMarker } from "../../lib/showMarker";
import { hideMarker } from "../../lib/hideMarker";

export const CustomOverlay = ({ position, windowContent }: ICustomOverlay) => {
    // * Instantiate OverlayView class instance
    const customOverlay = new google.maps.OverlayView();

    // * Method called whenever CustomMarker 'setMap' is set to a valid map instance
    customOverlay.onAdd = () => {
        // * Append the pop-up window's div with content to the map's floatPane
        // * The floatPane div is where google's docs specify info windows to reside
        customOverlay.getPanes()?.floatPane.appendChild(windowContent);

        // * Prevent mouse events from bubbling up to map container
        // * Allows for pop-up window to be click-able without triggering events to the map underneath
        google.maps.OverlayView.preventMapHitsAndGesturesFrom(windowContent);

        // * Get map instance of the CustomMarker
        const map = customOverlay.getMap() as google.maps.Map;

        // * Bind event listeners for CustomMarker
        ["click", "touchenter"].forEach((domEvent) => {
            // * Event listener to show the CustomMarker's pop-up window when the icon is clicked
            windowContent.querySelector("#marker-icon")?.addEventListener(domEvent, () => {
                // * Show the currently clicked CustomMarker's pop-up window
                showMarker(windowContent, styles.active);

                // * Pan the map to the position of the CustomMarker so that it's in the centre of the screen
                map.panTo(position);
            });

            // * Event listener to hide pop-up window when the 'close' button element in the CustomMarker's pop-up window is clicked
            windowContent.querySelector("#btn-close")?.addEventListener(domEvent, () => hideMarker(windowContent, styles.active));

            // * Event listener to hide all pop-up windows when map is clicked
            map.addListener(domEvent, () => hideMarker(windowContent, styles.active));
        });
    };

    // * Method called whenever the map's centre or zoom changes
    customOverlay.draw = () => {
        // * Get the current position of the div in pixel coordinates
        const currentDivPosition = customOverlay.getProjection().fromLatLngToDivPixel(position)!;

        // * Hide the custom marker when it is far out of view.
        const divDisplay = Math.abs(currentDivPosition.x) < 4000 && Math.abs(currentDivPosition.y) < 4000 ? "flex" : "none";

        // * If pop-up window is visible, then re-draw to new position whenever map centre or zoom is changed
        if (divDisplay === "flex") {
            windowContent.style.left = currentDivPosition.x + "px";
            windowContent.style.top = currentDivPosition.y + "px";
        }

        // * If pop-up window is not being displayed/hidden then display/hide it
        if (windowContent.style.display !== divDisplay) {
            windowContent.style.display = divDisplay;
        }
    };

    // * Method called whenever CustomMarker 'setMap' is set to 'null'
    customOverlay.onRemove = () => {
        // * Remove content div from the dom
        if (windowContent.parentElement) {
            windowContent.parentElement.removeChild(windowContent);
        }
    };

    return customOverlay;
};
