import { useState } from "react";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faOtter, faVolcano, faDigging, faTimeline } from "@fortawesome/free-solid-svg-icons";

import { IMapLayers } from "../../types/IMapLayers";
import { ILayerState } from "../../types/ILayerState";

import { Button, buttonUtils } from "../../components/Button";

export const MapLayers = ({ setLayerState, setMapPreferences }: IMapLayers) => {
    // * Initialize state of dropdown with default set to false
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
        <div className='flex flex-col justify-center items-center gap-1 bg-transparent' aria-label='map-layers'>
            <motion.button className={buttonUtils} aria-label='Filter Map by Layer' onClick={() => setDropdownDisplay(!dropdownDisplay)} layout>
                <FontAwesomeIcon icon={faLayerGroup} className='mr-2' /> Filter
            </motion.button>
            {dropdownDisplay && (
                <ul className='flex flex-col gap-1 text-sm'>
                    <Button styleOverride={{ justifyContent: "flex-start" }} onClick={() => toggleLayers("Archaeology")}>
                        <FontAwesomeIcon className='text-2xl' icon={faDigging} />
                    </Button>
                    <Button styleOverride={{ justifyContent: "flex-start" }} onClick={() => toggleLayers("Biology")}>
                        <FontAwesomeIcon className='text-2xl' icon={faOtter} />
                    </Button>
                    <Button styleOverride={{ justifyContent: "flex-start" }} onClick={() => toggleLayers("Geology")}>
                        <FontAwesomeIcon className='text-2xl' icon={faVolcano} />
                    </Button>
                    <Button styleOverride={{ justifyContent: "flex-start" }} onClick={() => toggleLayers("History")}>
                        <FontAwesomeIcon className='text-2xl' icon={faTimeline} />
                    </Button>
                </ul>
            )}
        </div>
    );
};
