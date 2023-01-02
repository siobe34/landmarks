export interface ILandmark {
    _id: string;
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    type: "Archaeology" | "Biology" | "Geology" | "History";
    name: string;
    imageSource: string;
    imageCaption: string;
    description: string;
    sources: string[];
}
