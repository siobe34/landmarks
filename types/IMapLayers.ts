import { ILayerState } from "./ILayerState";

export interface IMapLayers {
    setMapPreferences: () => void;
    setLayerState: React.Dispatch<React.SetStateAction<ILayerState>>;
}
