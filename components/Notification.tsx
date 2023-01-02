import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { INotificationGroup, INotificationItem } from "../types/INotification";

const variantsContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const variantsItem = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.75 },
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: { duration: 0.75 },
    },
};

export const NotificationGroup = ({ children }: INotificationGroup) => {
    return (
        <motion.ul
            className='fixed right-0 flex flex-col justify-center items-start gap-1 p-4 z-50'
            variants={variantsContainer}
            initial='hidden'
            animate='visible'
            exit='exit'
            aria-label='Notifications'
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) return React.cloneElement(child);
                return null;
            })}
        </motion.ul>
    );
};

export const NotificationItem = ({ children, timeout }: INotificationItem) => {
    if (!timeout) timeout = 5000;

    const [itemState, setItemState] = useState<boolean>(true);

    useEffect(() => {
        if (!itemState) return;

        const timeoutFunc = setTimeout(() => {
            setItemState(false);
        }, timeout);

        return () => clearTimeout(timeoutFunc);
    }, [itemState, timeout]);

    return (
        <AnimatePresence mode='wait'>
            {itemState && (
                <motion.li
                    className='flex justify-between items-center py-2 px-4 w-full overflow-hidden border rounded border-primary bg-secondary text-txtOnSecondary'
                    variants={variantsItem}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    aria-label='Notification Item'
                >
                    <div>
                        <FontAwesomeIcon className='mr-2' icon={faCircleInfo} />
                        {children}
                    </div>
                    <FontAwesomeIcon className='cursor-pointer ml-2' icon={faClose} onClick={() => setItemState(false)} />
                </motion.li>
            )}
        </AnimatePresence>
    );
};
