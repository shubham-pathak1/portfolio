import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    Calendar,
    GraduationCap,
    ChevronDown,
    ChevronUp,
    Globe,
    Twitter,
    Linkedin,
    Github,
    MapPin
} from "lucide-react";

import redsparkLogo from "../../assets/redspark.png";
import boltLogo from "../../assets/bolt-iot.png";

const experiences = [
    {
        id: "redspark",
        company: "Redspark Technologies",
        role: "MERN Stack Intern",
        location: "Vadodara, India (On-Site)",
        duration: "Jan 2026 - Ongoing",
        logo: redsparkLogo,
        socials: {
            website: "https://redsparkinfo.com/",
            twitter: "#",
            linkedin: "#",
            github: "#"
        },
        technologies: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Express.js", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
        ],
        description: [
            "Actively learning and implementing MERN stack solutions for various projects.",
            "Collaborating with the development team on building scalable web applications.",
            "Participating in code reviews and architectural discussions."
        ]
    },
    {
        id: "bolt",
        company: "Bolt IoT",
        role: "Front-End Developer Intern",
        location: "Remote (India)",
        duration: "Dec 2022 - Feb 2023",
        logo: boltLogo,
        socials: {
            website: "https://www.boltiot.com/",
            github: "#"
        },
        technologies: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ],
        description: [
            "Developed user-friendly interfaces, improving client interaction.",
            "Designed responsive layouts for cross-device accessibility.",
            "Integrated APIs for real-time data updates."
        ]
    }
];

const ExperienceItem = ({ exp }: { exp: typeof experiences[0] }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border-b border-border last:border-0 py-8 group">
            <div
                className="flex items-start gap-5 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Logo Placeholder */}
                <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-border flex-shrink-0 flex items-center justify-center overflow-hidden p-2">
                    {exp.logo ? (
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    ) : (
                        <div className="text-text-primary/10 font-bold select-none text-[8px] leading-tight flex flex-col items-center">
                            <Briefcase size={16} className="mb-1 opacity-20" />
                            {exp.company.split(' ')[0]}
                        </div>
                    )}
                </div>

                {/* Main Info */}
                <div className="flex-grow pt-1">
                    <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="text-xl font-bold text-text-primary tracking-tight">{exp.company}</h3>
                        <div className="flex items-center gap-2.5 text-text-secondary opacity-40 group-hover:opacity-100 transition-opacity">
                            {exp.socials.website && (
                                <a
                                    href={exp.socials.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="hover:text-text-primary transition-colors"
                                >
                                    <Globe size={15} />
                                </a>
                            )}
                            {exp.socials.twitter && <Twitter size={15} className="hover:text-text-primary transition-colors" />}
                            {exp.socials.linkedin && <Linkedin size={15} className="hover:text-text-primary transition-colors" />}
                            {exp.socials.github && <Github size={15} className="hover:text-text-primary transition-colors" />}
                            <div className="ml-1 transition-transform duration-300">
                                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </div>
                        </div>
                    </div>
                    <div className="text-base text-text-secondary/80 font-medium">{exp.role}</div>
                </div>

                {/* Right Side: Date & Location */}
                <div className="flex flex-col items-end text-right pt-2 shrink-0">
                    <div className="text-[13px] sm:text-sm font-semibold text-text-primary/90 mb-1.5 tracking-wide">{exp.duration}</div>
                    <div className="text-[11px] sm:text-xs text-text-secondary font-medium tracking-tight flex items-center gap-1 justify-end">
                        <MapPin size={12} className="opacity-50" />
                        {exp.location}
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-8 pl-0 sm:pl-[84px]">
                            {/* Technologies */}
                            <div className="mb-8">
                                <h4 className="text-base font-bold text-text-primary mb-5 tracking-tight">Technologies & Tools</h4>
                                <div className="flex flex-wrap gap-3">
                                    {exp.technologies.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-2.5 px-4 py-2 rounded-lg border border-dashed border-border bg-surface/30 text-sm font-medium text-text-secondary/90 hover:border-text-secondary transition-colors"
                                        >
                                            <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Description Points */}
                            <ul className="space-y-4">
                                {exp.description.map((point, idx) => (
                                    <li key={idx} className="flex gap-4 text-[15px] text-text-secondary leading-relaxed font-medium">
                                        <div className="mt-2 w-1.5 h-1.5 bg-text-primary shrink-0 opacity-80" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Experience = () => {
    return (
        <section className="flex flex-col gap-24 mb-32">
            {/* Experience Column */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-wider text-text-secondary border-b border-border pb-2">
                    <Briefcase size={16} />
                    Experience
                </div>

                <div className="divide-y divide-border border-t border-border">
                    {experiences.map((exp) => (
                        <ExperienceItem key={exp.id} exp={exp} />
                    ))}
                </div>
            </motion.div>

            {/* Education Column */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <div className="flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-wider text-text-secondary border-b border-border pb-2">
                    <GraduationCap size={16} />
                    Education
                </div>

                <div className="relative pl-6 border-l-2 border-border space-y-12 pt-4">
                    {/* Item 1 */}
                    <div className="relative group">
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg border-4 border-border transition-all duration-300 group-hover:scale-125 group-hover:border-text-primary" />
                        <div className="relative">
                            <div className="font-bold text-text-primary text-lg mb-1">B.Tech in Computer Science</div>
                            <div className="text-sm text-text-secondary mb-4">Navrachana University</div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-hover border border-border text-xs font-mono text-text-secondary">
                                <Calendar size={12} />
                                2023 - Ongoing
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative group">
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg border-4 border-border transition-all duration-300 group-hover:scale-125 group-hover:border-text-primary" />
                        <div className="relative">
                            <div className="font-bold text-text-primary text-lg mb-1">Diploma in Computer Engineering</div>
                            <div className="text-sm text-text-secondary mb-4">Parul University</div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-hover border border-border text-xs font-mono text-text-secondary">
                                <Calendar size={12} />
                                2020 - 2023
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
