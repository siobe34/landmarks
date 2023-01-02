import { ILandmark } from "./ILandmark";

export interface IMapPreference extends google.maps.MapOptions {
    centre: google.maps.LatLng | google.maps.LatLngLiteral;
    zoom: number;
}

export interface IMap extends IMapPreference {
    className?: string;
    children:
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | readonly React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    centre: google.maps.LatLng | google.maps.LatLngLiteral;
    zoom: number;
}

export interface IMarker extends google.maps.MarkerOptions {
    map?: google.maps.Map | null | undefined;
    position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined;
    displayMarker: boolean;
    landmark: ILandmark;
}
