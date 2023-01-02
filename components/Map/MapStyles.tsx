import { useState } from "react";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

import { IMapStyles } from "../../types/IMapStyles";
import { mapStyleArrays, IStyles } from "../../lib/mapStyleArrays";

import { Button, buttonUtils } from "../../components/Button";

export const MapStyles = ({ setMapPreferences, setMapStyle }: IMapStyles) => {
    // * Initialize state of dropdown with default set to false
    const [dropdownDisplay, setDropdownDisplay] = useState<boolean>(false);

    // * Func to change the map style
    const changeStyle = (style: keyof IStyles) => {
        // * Set map style to the selected style
        setMapStyle(mapStyleArrays[style]);

        // * Update the map centre and zoom from storage
        // * This is done to override whatever is stored in centre and zoom states
        setMapPreferences();
    };

    return (
        <div className='flex flex-col justify-center items-center gap-1 bg-transparent' aria-label='map-layers'>
            <motion.button className={buttonUtils} aria-label='Filter Map by Layer' onClick={() => setDropdownDisplay(!dropdownDisplay)} layout>
                <FontAwesomeIcon icon={faMap} className='mr-2' /> Styles
            </motion.button>
            {dropdownDisplay && (
                <ul className='flex flex-col gap-1 text-sm'>
                    {Object.keys(mapStyleArrays).map((styleName) => {
                        const newStyle = styleName as keyof IStyles;
                        return (
                            <Button className='capitalize' key={styleName} onClick={() => changeStyle(newStyle)}>
                                {styleName.replaceAll("_", " ")}
                            </Button>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
