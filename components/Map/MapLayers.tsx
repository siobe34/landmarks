import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faOtter, faVolcano, faDigging, faTimeline } from "@fortawesome/free-solid-svg-icons";

import { IMapLayers } from "../../types/IMapLayers";
import { ILayerState } from "../../types/ILayerState";

import { Button } from "../../components/Button";

export const MapLayers = ({ setLayerState, setMapPreferences }: IMapLayers) => {
    const [dropdownDisplay, setDropdownDisplay] = useState<boolean>(false);

    // * Func to toggle layer state of markers on map
    const toggleLayers = (layer: keyof ILayerState) => {
        // * Toggle the state of the layer that was clicked
        setLayerState((prevState) => ({ ...prevState, [layer]: !prevState[layer] }));

        // * Update the map centre and zoom from storage
        // * This is done to override whatever is stored in centre and zoom states
        setMapPreferences();
    };

    return (
        <div className='absolute top-2 flex flex-col justify-center items-center gap-1 bg-transparent' aria-label='map-layers'>
            <Button aria-label='Filter Map by Layer' onClick={() => setDropdownDisplay(!dropdownDisplay)}>
                <FontAwesomeIcon icon={faLayerGroup} className='mr-2' /> Filter
            </Button>
            {dropdownDisplay && (
                <ul className='flex flex-col gap-1 text-sm'>
                    <Button styleOverride={{ justifyContent: "flex-start" }} onClick={() => toggleLayers("Archaeology")}>
                        <FontAwesomeIcon className='mr-2' icon={faDigging} /> Archaeology
                    </Button>
                    <Button styleOverride={{ justifyContent: "flex-start" }} onClick={() => toggleLayers("Biology")}>
                        <FontAwesomeIcon className='mr-2' icon={faOtter} /> Biology
                    </Button>
                    <Button styleOverride={{ justifyContent: "flex-start" }} onClick={() => toggleLayers("Geology")}>
                        <FontAwesomeIcon className='mr-2' icon={faVolcano} /> Geology
                    </Button>
                    <Button styleOverride={{ justifyContent: "flex-start" }} onClick={() => toggleLayers("History")}>
                        <FontAwesomeIcon className='mr-2' icon={faTimeline} /> History
                    </Button>
                </ul>
            )}
        </div>
    );
};
