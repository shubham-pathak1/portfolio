import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../../assets/my_img.jpg";

export const Hero = () => {
    return (
        <section className="flex flex-col items-center text-center mt-12 mb-32 min-h-[60vh] md:min-h-[70vh] justify-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-10"
            >
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-surface-hover shadow-2xl relative z-10 p-1 group">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img
                            src={profileImage}
                            alt="Shubham Pathak"
                            className="w-full h-full object-cover object-center scale-[1.8] grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                        {/* Inner glass shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                </div>
                {/* Glow behind avatar */}
                <div className="absolute inset-0 bg-primary/20 blur-[60px] -z-10 rounded-full scale-110" />
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center"
            >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-4">
                    Shubham Pathak
                </h1>

                <div className="px-4 py-1.5 rounded-full border border-border bg-surface text-text-secondary font-mono text-sm mb-8">
                    Front-End Developer
                </div>

                <div className="flex gap-4 flex-wrap justify-center mb-8">
                    <a
                        href="https://drive.google.com/file/d/12KIoZCeB7_BWNRpRyWUmXj2ica6L4b1w/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-bg font-semibold hover:opacity-90 transition-transform active:scale-95 shadow-lg shadow-text-primary/20"
                    >
                        <Download size={18} />
                        Resume
                    </a>
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/shubham-pathak1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip-trigger text-text-secondary hover:text-text-primary transition-colors"
                        data-tooltip="GitHub"
                    >
                        <Github className="w-6 h-6 stroke-[1.5]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shubham-pathak-05366b272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip-trigger text-text-secondary hover:text-text-primary transition-colors"
                        data-tooltip="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6 stroke-[1.5]" />
                    </a>
                    <a
                        href="mailto:shubhamxkcd@gmail.com"
                        className="tooltip-trigger text-text-secondary hover:text-text-primary transition-colors"
                        data-tooltip="Email"
                    >
                        <Mail className="w-6 h-6 stroke-[1.5]" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
