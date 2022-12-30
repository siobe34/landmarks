export interface ICustomOverlay extends google.maps.OverlayView {
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    markerDiv: HTMLDivElement;
}
