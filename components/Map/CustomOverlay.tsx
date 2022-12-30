import { ICustomOverlay } from "../../types/ICustomOverlay";

export const CustomOverlay = ({ position, markerDiv }: ICustomOverlay) => {
    // * Instantiate OverlayView class instance
    const customOverlay = new google.maps.OverlayView();

    // * Method called whenever CustomMarker 'setMap' is set to a valid map instance
    customOverlay.onAdd = () => {
        // * Append the div with content to the map's overlay div
        customOverlay.getPanes()?.floatPane.appendChild(markerDiv);

        // * Prevent mouse events from bubbling up to map container
        // * Allows for pop-up window to be click-able without triggering events to the map underneath
        google.maps.OverlayView.preventMapHitsAndGesturesFrom(markerDiv);

        customOverlay.addListener("pointerenter", () => {
            console.log(customOverlay.getMap());
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
            markerDiv.style.left = currentDivPosition.x + "px";
            markerDiv.style.top = currentDivPosition.y + "px";
        }

        // * If pop-up window is not being displayed/hidden then display/hide it
        if (markerDiv.style.display !== divDisplay) {
            markerDiv.style.display = divDisplay;
        }
    };

    // * Method called whenever CustomMarker 'setMap' is set to 'null'
    customOverlay.onRemove = () => {
        // * Remove content div from the dom
        if (markerDiv.parentElement) {
            markerDiv.parentElement.removeChild(markerDiv);
        }
    };

    return customOverlay;
};
