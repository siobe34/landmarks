import { IMarker } from "../../types/IMap";

export const Marker = ({ map, position }: IMarker) => {
    // * Instantiate google maps Advanced Marker View object
    const advancedMarker = new window.google.maps.marker.AdvancedMarkerView({
        position: position,
        // TODO add title for markers
    });

    advancedMarker.map = map;

    return null;
};
