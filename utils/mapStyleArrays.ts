export interface IStyles {
    default: google.maps.MapOptions["styles"];
    dark: google.maps.MapOptions["styles"];
    dark_muted: google.maps.MapOptions["styles"];
    solarized_dark: google.maps.MapOptions["styles"];
    blue_light: google.maps.MapOptions["styles"];
    blue_dark: google.maps.MapOptions["styles"];
}

export const mapStyleArrays = {
    default: [
        {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [
                {
                    color: "#f7f1df",
                },
            ],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
                {
                    color: "#d0e3b4",
                },
            ],
        },
        {
            featureType: "landscape.natural.terrain",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.business",
            elementType: "all",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.medical",
            elementType: "geometry",
            stylers: [
                {
                    color: "#fbd3da",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#bde6ab",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#ffe15f",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#efd151",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#ffffff",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "black",
                },
            ],
        },
        {
            featureType: "transit.station.airport",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#cfb2db",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#a2daf2",
                },
            ],
        },
    ],
    dark: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
        },
    ],
    dark_muted: [
        {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
                {
                    saturation: 36,
                },
                {
                    color: "#000000",
                },
                {
                    lightness: 40,
                },
            ],
        },
        {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    visibility: "on",
                },
                {
                    color: "#000000",
                },
                {
                    lightness: 16,
                },
            ],
        },
        {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 20,
                },
            ],
        },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 17,
                },
                {
                    weight: 1.2,
                },
            ],
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 20,
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 21,
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 17,
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 29,
                },
                {
                    weight: 0.2,
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 18,
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 16,
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 19,
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 17,
                },
            ],
        },
    ],
    solarized_dark: [
        {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#ffffff",
                },
            ],
        },
        {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#000000",
                },
                {
                    lightness: 13,
                },
            ],
        },
        {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#000000",
                },
            ],
        },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#144b53",
                },
                {
                    lightness: 14,
                },
                {
                    weight: 1.4,
                },
            ],
        },
        {
            featureType: "landscape",
            elementType: "all",
            stylers: [
                {
                    color: "#08304b",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#0c4152",
                },
                {
                    lightness: 5,
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#000000",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#0b434f",
                },
                {
                    lightness: 25,
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#000000",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#0b3d51",
                },
                {
                    lightness: 16,
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [
                {
                    color: "#146474",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [
                {
                    color: "#021019",
                },
            ],
        },
    ],
    blue_light: [
        {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [
                {
                    visibility: "on",
                },
                {
                    color: "#e0efef",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [
                {
                    visibility: "on",
                },
                {
                    hue: "#1900ff",
                },
                {
                    color: "#c0e8e8",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    lightness: 100,
                },
                {
                    visibility: "simplified",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "on",
                },
                {
                    lightness: 700,
                },
            ],
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [
                {
                    color: "#7dcdcd",
                },
            ],
        },
    ],
    blue_dark: [
        {
            featureType: "all",
            elementType: "geometry",
            stylers: [
                {
                    color: "#202c3e",
                },
            ],
        },
        {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
                {
                    gamma: 0.01,
                },
                {
                    lightness: 20,
                },
                {
                    weight: "1.39",
                },
                {
                    color: "#ffffff",
                },
            ],
        },
        {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    weight: "0.96",
                },
                {
                    saturation: "9",
                },
                {
                    visibility: "on",
                },
                {
                    color: "#000000",
                },
            ],
        },
        {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
                {
                    lightness: 30,
                },
                {
                    saturation: "9",
                },
                {
                    color: "#29446b",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    saturation: 20,
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    lightness: 20,
                },
                {
                    saturation: -20,
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    lightness: 10,
                },
                {
                    saturation: -30,
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#193a55",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                {
                    saturation: 25,
                },
                {
                    lightness: 25,
                },
                {
                    weight: "0.01",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [
                {
                    lightness: -20,
                },
            ],
        },
    ],
};
