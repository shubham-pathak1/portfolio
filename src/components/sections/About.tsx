import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import profileImage from "../../assets/my_img.jpg";
import rustIcon from "../../assets/rust.png";

export const About = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skills = [
        { id: "react", name: "React", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" },
        { id: "typescript", name: "TypeScript", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/typescript-original.svg" },
        { id: "nextjs", name: "Next.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nextjs-original.svg" },
        { id: "nodejs", name: "Node.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nodejs-original.svg" },
        { id: "rust", name: "Rust", icon: rustIcon },
        { id: "linux", name: "Linux", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/linux-original.svg" }
    ];

    const socials = [
        {
            href: "https://www.linkedin.com/in/shubham-pathak-05366b272/",
            label: "Open LinkedIn profile",
            icon: Linkedin
        },
        {
            href: "mailto:shubhamxkcd@gmail.com",
            label: "Send an email",
            icon: Mail
        },
        {
            href: "https://github.com/shubham-pathak1",
            label: "Open GitHub profile",
            icon: Github
        }
    ];

    return (
        <section className="min-h-[85vh] flex flex-col justify-center mb-24 relative">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col md:grid md:grid-cols-[320px_1fr] gap-4 md:gap-12 items-start"
            >
                <div className="flex flex-row md:flex-col md:mx-0 gap-4 sm:gap-5 md:gap-8 items-center md:items-start shrink-0 w-full md:w-auto mb-2 md:mb-0">
                    <div className="relative p-1 md:p-2 rounded-full md:rounded-[2rem] bg-surface/50 border border-border/50 backdrop-blur-sm transition-all duration-500 group-hover:border-text-primary/20 shrink-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-[320px] md:h-auto md:aspect-[4/5] rounded-full md:rounded-[1.5rem] overflow-hidden bg-surface border border-border group-hover:border-text-primary/30 transition-colors duration-500">
                            <img
                                src={profileImage}
                                alt="Shubham Pathak"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-center scale-[1.7] md:scale-[1.8] transition-all duration-700 ease-out"
                            />
                        </div>

                        <div className="hidden md:block absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-text-primary/20 rounded-br-[2rem] group-hover:border-text-primary/40 transition-colors duration-500" />
                    </div>

                    <div className="flex md:hidden flex-col gap-1">
                        <h2 className="text-2xl font-bold text-text-primary tracking-tight">
                            Shubham Pathak
                        </h2>
                        <p className="text-sm font-medium text-text-secondary">Full Stack Dev</p>
                    </div>
                </div>

                <div className="flex flex-col items-start text-left w-full">
                    <h1 className="sr-only">
                        Shubham Pathak | Software Engineer & Designer
                    </h1>

                    <div className="mb-4 md:mb-2">
                        <h2 className="hidden md:block text-3xl md:text-4xl font-bold text-text-primary leading-tight whitespace-nowrap">
                            Shubham Pathak
                        </h2>
                        <p className="hidden md:block text-lg font-medium text-text-secondary mt-1">
                            Full Stack Dev
                        </p>
                    </div>

                    <div className="space-y-6 mb-8 md:mb-6">
                        <p className="text-text-secondary text-base md:text-xl leading-relaxed">
                            I build things for the web using{" "}
                            <span className="text-text-primary font-bold">
                                React
                            </span>
                            ,{" "}
                            <span className="text-text-primary font-bold">
                                TypeScript
                            </span>
                            , and{" "}
                            <span className="text-text-primary font-bold">
                                Node.js
                            </span>
                            . I am also into{" "}
                            <span className="text-text-primary font-bold">
                                interaction design
                            </span>
                            , contributing to{" "}
                            <span className="text-text-primary font-bold">
                                open source
                            </span>
                            {" "}and yeah,{" "}
                            <span className="text-text-primary font-bold">
                                I use Arch btw :)
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 md:gap-8 w-full">
                        <div className="flex flex-col gap-4 items-start">
                            <span className="text-sm md:text-base font-bold text-text-primary">
                                Core stack & tools
                            </span>

                            <div className="flex flex-wrap gap-2.5 md:gap-4 items-center w-full">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="relative group/skill z-0 hover:z-[100] focus-within:z-[100] w-10 h-10 flex items-center justify-center"
                                    >
                                        <motion.button
                                            type="button"
                                            onMouseEnter={() => setHoveredSkill(skill.id)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                            onFocus={() => setHoveredSkill(skill.id)}
                                            onBlur={() => setHoveredSkill(null)}
                                            onTouchStart={() => setHoveredSkill(skill.id)}
                                            whileHover={{
                                                y: -5,
                                                scale: 1.1,
                                                zIndex: 50,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 25
                                                }
                                            }}
                                            aria-label={skill.name}
                                            className="w-10 h-10 rounded-full bg-surface-hover border border-border/50 grid place-items-center shadow-sm cursor-pointer relative appearance-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary focus-visible:outline-offset-2"
                                        >
                                            {skill.id === "nextjs" ? (
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-5 h-5 object-contain transition-all duration-300 dark:invert grayscale group-hover/skill:grayscale-0"
                                                />
                                            ) : (
                                                <img
                                                    src={skill.icon}
                                                    className="w-5 h-5 transition-all duration-300 group-hover/skill:grayscale-0 group-hover/skill:scale-110"
                                                    alt={skill.name}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            )}
                                        </motion.button>

                                        <AnimatePresence>
                                            {hoveredSkill === skill.id && (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 10,
                                                        x: "-50%"
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        x: "-50%"
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: 5,
                                                        x: "-50%"
                                                    }}
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

                        {/* Mobile CTA */}
                        <div className="flex md:hidden items-center gap-3 w-full mb-10">
                            <a
                                href="https://drive.google.com/file/d/12KIoZCeB7_BWNRpRyWUmXj2ica6L4b1w/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open resume in a new tab"
                                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-text-primary text-bg font-bold active:scale-95 transition-all text-xs"
                            >
                                <Download size={14} />
                                Resume / CV
                            </a>

                            <div className="flex items-center gap-4 px-2">
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.href}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="text-text-secondary hover:text-text-primary transition-colors"
                                        >
                                            <Icon size={22} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex flex-wrap items-center justify-center md:justify-start gap-6">
                            <div className="flex items-center gap-3 flex-wrap justify-center">
                                <a
                                    href="https://drive.google.com/file/d/12KIoZCeB7_BWNRpRyWUmXj2ica6L4b1w/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open resume in a new tab"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-bg font-bold hover:shadow-lg transition-all active:scale-95 text-xs"
                                >
                                    <Download size={16} />
                                    Resume / CV
                                </a>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-hover/50 border border-border/50">
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.href}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="text-text-secondary hover:text-text-primary transition-all p-1.5"
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};