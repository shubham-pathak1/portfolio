import { AnimatePresence, motion } from "framer-motion";
import loaderAnimation from "../../assets/initial.gif";

interface PageLoaderProps {
    visible: boolean;
}

export const PageLoader = ({ visible }: PageLoaderProps) => {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="page-loader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: "linear" }}
                    className="fixed inset-0 z-[9999] pointer-events-auto backdrop-blur-[14px] bg-[linear-gradient(180deg,rgba(0,0,0,0.26),rgba(0,0,0,0.4))]"
                    role="status"
                    aria-live="polite"
                    aria-label="Loading page"
                >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            initial={{ y: 8, opacity: 0.92 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 5, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <motion.img
                                src={loaderAnimation}
                                alt="Loading"
                                initial={{ scale: 0.95, opacity: 0.88 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.98, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-72 md:w-80 h-auto object-contain select-none pointer-events-none"
                                draggable={false}
                            />
                            <p className="font-['Press_Start_2P'] text-[16px] md:text-[18px] leading-none tracking-[0.05em] uppercase text-white [text-shadow:2px_2px_0_rgba(0,0,0,0.95)]">
                                LOADING...
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

