import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { BlackHole } from "../ui/BlackHole";

export const Hero = () => {
    return (
        <section className="flex flex-col items-center text-center mt-20 mb-28">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-full h-[300px] md:h-[400px] -mt-20 overflow-visible"
            >
                <BlackHole />
                {/* Glow behind avatar */}
                <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 rounded-full" />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold tracking-tight text-text-primary mb-4"
            >
                Shubham Pathak
            </motion.h1>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-4 py-1.5 rounded-full border border-border bg-surface text-text-secondary font-mono text-sm mb-8"
            >
                Front-End Developer
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 flex-wrap justify-center mb-4"
            >
                <a
                    href="https://drive.google.com/file/d/12KIoZCeB7_BWNRpRyWUmXj2ica6L4b1w/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-bg font-semibold hover:opacity-90 transition-transform active:scale-95 shadow-lg shadow-text-primary/20"
                >
                    <Download size={18} />
                    Resume
                </a>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex gap-4 mt-2">
                    <a
                        href="https://github.com/shubham-pathak1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip-trigger text-text-secondary hover:text-text-primary"
                        data-tooltip="GitHub"
                    >
                        <Github className="w-6 h-6 stroke-[1.5]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shubham-pathak-05366b272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip-trigger text-text-secondary hover:text-text-primary"
                        data-tooltip="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6 stroke-[1.5]" />
                    </a>
                    <a
                        href="mailto:shubhamxkcd@gmail.com"
                        className="tooltip-trigger text-text-secondary hover:text-text-primary"
                        data-tooltip="Email"
                    >
                        <Mail className="w-6 h-6 stroke-[1.5]" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
