// * Func to hide a marker's pop-up content
export const hideMarker = (markerDiv: HTMLElement, activeClass: string) => {
    // * Remove class to hide pop-up window
    markerDiv.classList.remove(activeClass);

    // * Revert z-index that was set when marker was hovered over
    markerDiv.style.zIndex = "";
};
