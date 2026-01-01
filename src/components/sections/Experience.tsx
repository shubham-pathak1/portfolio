import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

export const Experience = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

            {/* Experience Column */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-text-secondary border-b border-border pb-2">
                    <Briefcase size={16} />
                    Experience
                </div>

                <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-surface border border-border hover:border-text-secondary/50 transition-colors group">
                        <div className="flex flex-col gap-1 mb-4">
                            <h3 className="text-lg font-bold text-text-primary">Front-End Developer Intern</h3>
                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                                <span>Bolt IoT</span>
                                <span className="w-1 h-1 rounded-full bg-text-secondary/50" />
                                <span>Remote</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-mono text-text-secondary bg-surface-hover w-fit px-2 py-1 rounded mt-1">
                                <Calendar size={12} />
                                Dec 2022 - Feb 2023
                            </div>
                        </div>

                        <div className="flex gap-2 flex-wrap mb-4 group/skills">
                            <span className="tech-tool-pill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-hover border border-border text-xs font-mono text-text-secondary transition-opacity duration-300 group-hover/skills:opacity-40 hover:!opacity-100">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-4 h-4" alt="HTML" />
                                HTML
                            </span>
                            <span className="tech-tool-pill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-hover border border-border text-xs font-mono text-text-secondary transition-opacity duration-300 group-hover/skills:opacity-40 hover:!opacity-100">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-4 h-4" alt="CSS" />
                                CSS
                            </span>
                            <span className="tech-tool-pill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-hover border border-border text-xs font-mono text-text-secondary transition-opacity duration-300 group-hover/skills:opacity-40 hover:!opacity-100">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-4 h-4" alt="JS" />
                                JavaScript
                            </span>
                            <span className="tech-tool-pill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-hover border border-border text-xs font-mono text-text-secondary transition-opacity duration-300 group-hover/skills:opacity-40 hover:!opacity-100">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-4 h-4" alt="React" />
                                React
                            </span>
                        </div>

                        <ul className="space-y-2 text-sm text-text-secondary list-disc pl-4 marker:text-text-primary">
                            <li>Developed user-friendly interfaces, improving client interaction.</li>
                            <li>Designed responsive layouts for cross-device accessibility.</li>
                            <li>Integrated APIs for real-time data updates.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Education Column */}
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <div className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-text-secondary border-b border-border pb-2">
                    <GraduationCap size={16} />
                    Education
                </div>

                <div className="relative pl-6 border-l-2 border-border space-y-8">
                    {/* Item 1 */}
                    <div className="relative group">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-surface border-4 border-border transition-all duration-300 group-hover:scale-125 group-hover:border-text-primary" />
                        <div className="p-5 rounded-xl bg-surface border border-border">
                            <div className="font-bold text-text-primary">B.Tech in Computer Science</div>
                            <div className="text-sm text-text-secondary mb-2">Navrachana University</div>
                            <span className="text-xs font-mono px-2 py-1 rounded bg-surface-hover border border-border text-text-secondary">
                                2023 - Ongoing
                            </span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative group">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-surface border-4 border-border transition-all duration-300 group-hover:scale-125 group-hover:border-text-primary" />
                        <div className="p-5 rounded-xl bg-surface border border-border">
                            <div className="font-bold text-text-primary">Diploma in Computer Engineering</div>
                            <div className="text-sm text-text-secondary mb-2">Parul University</div>
                            <span className="text-xs font-mono px-2 py-1 rounded bg-surface-hover border border-border text-text-secondary">
                                2020 - 2023
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};
