import { hideMarker } from "./hideMarker";

// * Func to show a marker's pop-up content
export const showMarker = (markerDiv: HTMLElement, activeClass: string) => {
    // * Hide all other potentially active pop-up windows so only one window may be active at a time
    Array.from(document.getElementsByClassName(activeClass)).forEach((activeMarker) => {
        const elementOfActiveMarker = activeMarker as HTMLElement;
        hideMarker(elementOfActiveMarker, activeClass);
    });

    // * Add class to show pop-up window
    markerDiv.classList.add(activeClass);

    // * Display pop-up window being hovered above other elements
    markerDiv.style.zIndex = "1";

    // * Scroll to top of pop-up window when hovered
    markerDiv.scrollTo(0, 0);
};
