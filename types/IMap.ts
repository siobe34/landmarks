export interface IMap {
    className?: string;
    children: React.ReactElement;
    centre: google.maps.LatLng | google.maps.LatLngLiteral;
    zoom: number;
}

export interface IMarker {
    map?: google.maps.Map | null | undefined;
    position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined;
}
