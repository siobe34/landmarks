export interface ILandmark {
    id: number;
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    type: "Archaeology" | "Biology" | "Geology" | "History";
    name: string;
    imageSource: string;
    imageCaption: string;
    description: string;
    sources: string[];
}
