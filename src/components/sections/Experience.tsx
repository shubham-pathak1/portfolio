import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    ChevronRight
} from "lucide-react";
import expressIcon from "../../assets/express.png";
import redsparkIcon from "../../assets/redspark.png";
import boltIotIcon from "../../assets/bolt-iot.png";

const experiences = [
    {
        id: "redspark",
        company: "Redspark Technologies",
        logo: redsparkIcon,
        role: "MERN Stack Intern",
        location: "Vadodara (On-Site)",
        duration: "January 2026 - Present",
        website: "https://redsparkinfo.com/",
        isCurrent: true,
        technologies: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Express.js", icon: expressIcon },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
        ],
        description: [
            "Optimizing website and application performance, resulting in improved user experience and system efficiency.",
            "Developing and maintaining internal tools and infrastructure to support business operations and team productivity.",
            "Collaborating cross-functionally with development teams to design, implement, and deploy scalable internet solutions."
        ]
    },
    {
        id: "bolt",
        company: "Bolt IoT",
        logo: boltIotIcon,
        role: "Front-End Developer Intern",
        location: "Remote (India)",
        duration: "December 2022 - February 2023",
        website: "https://www.boltiot.com/",
        isCurrent: false,
        technologies: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ],
        description: [
            "Architected and developed complex frontend infrastructure for the platform, ensuring maximum maintainability and scalability.",
            "Designed and implemented user-friendly, responsive interfaces to improve client interaction and satisfaction.",
            "Integrated RESTful APIs for real-time data updates and seamless user experience across the entire platform."
        ]
    }
];

export const Experience = () => {
    const [showAll, setShowAll] = useState(false);
    const [expandedJobs, setExpandedJobs] = useState<string[]>([]);

    const toggleJob = (id: string) => {
        setExpandedJobs(prev => 
            prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]
        );
    };

    const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

    return (
        <section className="mb-32">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">Experience</h2>
            </motion.div>

            <div className="space-y-12">
                {displayedExperiences.map((exp, index) => {
                    const isExpanded = expandedJobs.includes(exp.id);
                    return (
                        <motion.div
                            key={exp.id}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            {/* Header Row */}
                            <div 
                                className="flex flex-col md:flex-row md:items-start justify-between gap-2 cursor-pointer"
                                onClick={() => toggleJob(exp.id)}
                            >
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-bold text-text-primary tracking-tight group-hover:text-text-primary transition-colors">
                                            {exp.company}
                                        </h3>
                                        {exp.isCurrent && (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-text-primary uppercase tracking-wider">
                                                Working
                                            </span>
                                        )}
                                        <div className={`text-text-secondary/20 group-hover:text-text-secondary/60 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                        </div>
                                    </div>
                                    <div className="text-sm text-text-secondary font-medium">
                                        {exp.role}
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-end text-left md:text-right">
                                    <div className="text-sm text-text-secondary opacity-60 font-medium">{exp.duration}</div>
                                    <div className="text-xs text-text-secondary opacity-40 font-medium">
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
                                        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-8 pb-4 border-t border-border/50 mt-6 space-y-8">
                                            {/* Technologies */}
                                            <div>
                                                <div className="text-[10px] font-bold tracking-[0.2em] text-text-primary mb-4">Technologies & Tools</div>
                                                <div className="flex gap-3 flex-wrap">
                                                    {exp.technologies.map((tech) => (
                                                        <div key={tech.name} className="w-9 h-9 rounded-lg bg-surface-hover border border-border flex items-center justify-center transition-all duration-300 tooltip-trigger" data-tooltip={tech.name}>
                                                            <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* What I've Done */}
                                            <div>
                                                <div className="text-[10px] font-bold tracking-[0.2em] text-text-primary mb-4">What I've done</div>
                                                <ul className="space-y-3">
                                                    {exp.description.map((point, i) => (
                                                        <li key={i} className="text-[13px] text-text-secondary leading-relaxed flex items-start gap-3">
                                                            <span className="mt-[7px] w-1 h-1 rounded-sm bg-text-secondary/30 shrink-0" />
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {experiences.length > 3 && (
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-surface-hover border border-border text-sm font-bold text-text-primary hover:border-text-primary transition-all active:scale-95"
                    >
                        {showAll ? "Show less" : "Show all work experiences"}
                    </button>
                </div>
            )}
        </section>
    );
};
