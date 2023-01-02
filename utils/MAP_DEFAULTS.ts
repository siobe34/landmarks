import { IMapPreference } from "../types/IMap";
import { ILayerState } from "../types/ILayerState";

export const DEFAULT_MAP_PREFERENCES: IMapPreference = {
    centre: { lat: 0, lng: 0 },
    zoom: 2.5,
};


export const DEFAULT_LAYER_STATE: ILayerState = {
    Archaeology: true,
    Biology: true,
    Geology: true,
    History: true,
};
