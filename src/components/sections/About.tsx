import { motion } from "framer-motion";
import profileImage from "../../assets/my_img.jpg";

export const About = () => {
    return (
        <section className="mb-32">
            <div className="flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-wider text-text-secondary border-b border-border pb-2">
                About Me
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 p-8 rounded-3xl bg-surface border border-border"
            >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-hover border border-border group">
                    <img
                        src={profileImage}
                        alt="About Avatar"
                        className="w-full h-full object-cover object-center scale-[1.8] grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">Shubham Pathak</h2>
                    <p className="text-text-secondary leading-relaxed mb-8">
                        I'm a Front-End Developer from Vadodara, Gujarat. I enjoy building interactive software experiences and experimenting with various Linux distros. My focus is on creating clean, high-performance applications that are both functional and visually engaging.
                    </p>

                    <div>
                        <div className="font-semibold text-text-primary mb-4">Skills</div>
                        <div className="flex flex-wrap gap-3">
                            <div className="tooltip-trigger w-10 h-10 grid place-items-center bg-surface border border-transparent rounded-lg hover:border-border hover:bg-surface-hover" data-tooltip="React">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-5 h-5" alt="React" />
                            </div>
                            <div className="tooltip-trigger w-10 h-10 grid place-items-center bg-surface border border-transparent rounded-lg hover:border-border hover:bg-surface-hover" data-tooltip="JavaScript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-5 h-5" alt="JS" />
                            </div>
                            <div className="tooltip-trigger w-10 h-10 grid place-items-center bg-surface border border-transparent rounded-lg hover:border-border hover:bg-surface-hover" data-tooltip="TypeScript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-5 h-5" alt="TS" />
                            </div>
                            <div className="tooltip-trigger w-10 h-10 grid place-items-center bg-surface border border-transparent rounded-lg hover:border-border hover:bg-surface-hover" data-tooltip="Next.js">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-5 h-5 dark:invert" alt="Next" />
                            </div>
                            <div className="tooltip-trigger w-10 h-10 grid place-items-center bg-surface border border-transparent rounded-lg hover:border-border hover:bg-surface-hover" data-tooltip="Node.js">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-5 h-5" alt="Node" />
                            </div>
                            <div className="tooltip-trigger w-10 h-10 grid place-items-center bg-surface border border-transparent rounded-lg hover:border-border hover:bg-surface-hover" data-tooltip="MongoDB">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-5 h-5" alt="Mongo" />
                            </div>
                            <div className="tooltip-trigger w-10 h-10 grid place-items-center bg-surface border border-transparent rounded-lg hover:border-border hover:bg-surface-hover" data-tooltip="Python">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-5 h-5" alt="Python" />
                            </div>
                            <div className="tooltip-trigger w-10 h-10 grid place-items-center bg-surface border border-transparent rounded-lg hover:border-border hover:bg-surface-hover" data-tooltip="Linux">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="w-5 h-5" alt="Linux" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
