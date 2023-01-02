export interface IMapStyles {
    setMapPreferences: () => void;
    setMapStyle: React.Dispatch<React.SetStateAction<google.maps.MapOptions["styles"]>>;
}
