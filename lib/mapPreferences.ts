import { withLocalStorage } from "./withStorage";

export const mapPreferences = {
    //* Get map preferences from Local Storage
    get: () => {
        const mapLat: number | null = Number(withLocalStorage.getItem("mapLat"));
        const mapLng: number | null = Number(withLocalStorage.getItem("mapLng"));
        const mapZoom: number | null = Number(withLocalStorage.getItem("mapZoom"));

        //* Return map centre and zoom if found in Local Storage
        if (mapLat && !isNaN(mapLat) && mapLng && !isNaN(mapLng) && mapZoom && !isNaN(mapZoom)) return { mapLat, mapLng, mapZoom };

        //* Otherwise return null
        return null;
    },
    //* Set map preferences in Local Storage
    set: (centre?: google.maps.LatLngLiteral, zoom?: number) => {
        //* If argument for map centre was included
        if (centre)
            try {
                //* Set the values of map centre in Local Storage
                withLocalStorage.setItem("mapLat", String(centre.lat));
                withLocalStorage.setItem("mapLng", String(centre.lng));
            } catch (err) {
                return err;
            }

        //* If argument for map zoom was included
        if (zoom)
            try {
                //* Set the map zoom in Local Storage
                withLocalStorage.setItem("mapZoom", String(zoom));
            } catch (err) {
                return err;
            }
    },
};
