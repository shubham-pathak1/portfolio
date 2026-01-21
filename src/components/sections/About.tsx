import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "../../assets/my_img.jpg";
import rustIcon from "../../assets/rust.png";

export const About = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skills = [
        { id: "react", name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id: "typescript", name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { id: "nextjs", name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", darkInvert: true },
        { id: "nodejs", name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { id: "rust", name: "Rust", icon: rustIcon },
        { id: "linux", name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
    ];

    return (
        <section className="mt-6 md:mt-24 mb-20 relative">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col md:grid md:grid-cols-[320px_1fr] gap-4 md:gap-12 items-start"
            >
                <div className="flex flex-row md:flex-col md:mx-0 gap-6 md:gap-8 items-center md:items-start shrink-0 w-full md:w-auto mb-2 md:mb-0">
                    <div className="relative p-1 md:p-2 rounded-full md:rounded-[2rem] bg-surface/50 border border-border/50 backdrop-blur-sm transition-all duration-500 group-hover:border-text-primary/20 shrink-0">
                        <div className="w-32 h-32 md:w-[320px] md:h-auto md:aspect-[4/5] rounded-full md:rounded-[1.5rem] overflow-hidden bg-surface border border-border group-hover:border-text-primary/30 transition-colors duration-500">
                            <img
                                src={profileImage}
                                alt="Shubham Pathak"
                                className="w-full h-full object-cover object-center scale-110 md:scale-[1.8] grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                            />
                        </div>
                        {/* Decorative Corner Accent (Desktop Only) */}
                        <div className="hidden md:block absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-text-primary/20 rounded-br-[2rem] group-hover:border-text-primary/40 transition-colors duration-500" />
                    </div>

                    <div className="flex md:hidden flex-col gap-1">
                        <h2 className="text-3xl font-bold text-text-primary tracking-tight">Behind the code.</h2>
                        <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase opacity-40">Available for scale.</div>
                    </div>
                </div>

                <div className="flex flex-col items-start text-left w-full">
                    <h1 className="sr-only">Shubham Pathak | Software Engineer & Designer</h1>
                    <div className="hidden md:flex items-center gap-4 mb-4">
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary opacity-50 font-mono">
                            01 — Background
                        </div>
                    </div>
                    <h2 className="hidden md:block text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">Behind the code.</h2>
                    <div className="space-y-6 mb-8 md:mb-10">
                        <p className="text-text-secondary text-base md:text-xl leading-relaxed">
                            I'm <span className="text-text-primary font-bold">Shubham</span>, an engineer crafting honest, high-performance software. By bridging the gap between infrastructure and <span className="text-text-primary font-bold">interaction design</span>, I build tools that are lean, transparent, and human. My focus is on making complex systems feel simple, respectful, and deliberate.
                        </p>
                    </div>

                    {/* Mobile-Only CTA Block (Relocated) */}
                    <div className="flex md:hidden flex-col gap-6 w-full items-start mb-10">
                        <div className="flex items-center gap-3 w-full">
                            <a
                                href="https://drive.google.com/file/d/12KIoZCeB7_BWNRpRyWUmXj2ica6L4b1w/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-text-primary text-bg font-bold active:scale-95 transition-all text-xs"
                            >
                                <Download size={14} />
                                Resume / CV
                            </a>
                            <a
                                href="mailto:shubhamxkcd@gmail.com"
                                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-border hover:border-text-primary active:scale-95 transition-all text-text-primary font-bold text-xs"
                            >
                                <Mail size={14} />
                                Contact
                            </a>
                        </div>
                        {/* Minimal Social Row */}
                        <div className="flex items-center justify-center gap-6 w-full mt-2">
                            <a href="https://github.com/shubham-pathak1" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/shubham-pathak-05366b272/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 md:gap-12 w-full">
                        <div className="flex flex-col gap-4 items-start">
                            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase opacity-30">Core stack & tools</span>
                            <div className="flex flex-wrap gap-2.5 md:gap-4 items-center w-full">
                                {skills.map((skill) => (
                                    <div key={skill.id} className="relative group/skill z-0 hover:z-[100] w-10 h-10 flex items-center justify-center">
                                        <motion.div
                                            onMouseEnter={() => setHoveredSkill(skill.id)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                            whileHover={{
                                                y: -5,
                                                scale: 1.1,
                                                zIndex: 50,
                                                transition: { type: "spring", stiffness: 400, damping: 25 }
                                            }}
                                            className="w-10 h-10 rounded-full bg-surface-hover border border-border/50 grid place-items-center shadow-sm cursor-pointer relative"
                                        >
                                            <img
                                                src={skill.icon}
                                                className={`w-5 h-5 transition-all duration-300 ${skill.darkInvert ? 'dark:invert' : ''} grayscale group-hover/skill:grayscale-0 group-hover/skill:scale-110`}
                                                alt={skill.name}
                                            />
                                        </motion.div>

                                        <AnimatePresence>
                                            {hoveredSkill === skill.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                                                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                                                    exit={{ opacity: 0, y: 5, x: "-50%" }}
                                                    className="absolute -top-12 left-1/2 px-3 py-1.5 rounded-lg bg-text-primary border border-text-primary shadow-2xl text-bg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap z-[9999] pointer-events-none"
                                                >
                                                    {skill.name}
                                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-text-primary rotate-45" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:flex flex-wrap items-center justify-center md:justify-start gap-6">
                            <div className="flex items-center gap-3 flex-wrap justify-center">
                                <a
                                    href="https://drive.google.com/file/d/12KIoZCeB7_BWNRpRyWUmXj2ica6L4b1w/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-bg font-bold hover:shadow-[0_0_20px_rgba(var(--text-primary-rgb),0.3)] transition-all active:scale-95 text-xs"
                                >
                                    <Download size={16} />
                                    Resume / CV
                                </a>
                                <a
                                    href="mailto:shubhamxkcd@gmail.com"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-text-primary transition-all text-text-primary font-bold text-xs"
                                >
                                    <Mail size={16} />
                                    Get in touch
                                </a>
                            </div>

                            <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-surface-hover/50 border border-border/50">
                                <a href="https://github.com/shubham-pathak1" target="_blank" className="text-text-secondary hover:text-text-primary transition-all p-1.5"><Github size={18} /></a>
                                <a href="https://www.linkedin.com/in/shubham-pathak-05366b272/" target="_blank" className="text-text-secondary hover:text-text-primary transition-all p-1.5"><Linkedin size={18} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
