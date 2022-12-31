import { motion } from "framer-motion";

export const Loading = () => {
    return (
        <div className='flex justify-center items-center w-24 h-24 mt-[10vh]'>
            <motion.div
                className='border-8 border-bg3 w-full h-full'
                style={{ borderTop: "8px solid rgb(var(--primary))", borderRadius: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            />
        </div>
    );
};
