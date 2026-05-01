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
            { name: "MongoDB", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/mongodb-original.svg" },
            { name: "Express.js", icon: expressIcon },
            { name: "React", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" },
            { name: "Node.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nodejs-original.svg" },
            { name: "Tailwind CSS", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/tailwindcss-original.svg" },
            { name: "Firebase", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/firebase-plain.svg" },
            { name: "Vercel", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/vercel-icon.svg" },
            { name: "Bun", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/bun-original.svg" },
            { name: "Postman", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/postman-original.svg" },
            { name: "Razorpay", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/razorpay.png" }
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
            { name: "HTML5", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/html5-original.svg" },
            { name: "CSS3", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/css3-original.svg" },
            { name: "JavaScript", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/javascript-original.svg" },
            { name: "React", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" }
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
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    const toggleJob = (id: string) => {
        setExpandedJobs(prev => 
            prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]
        );
    };

    const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

    return (
        <section className="mb-20">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-2"
            >
                <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">Experience</h2>
            </motion.div>

            <div className="space-y-0">
                {displayedExperiences.map((exp, index) => {
                    const isExpanded = expandedJobs.includes(exp.id);
                    return (
                        <motion.div
                            key={exp.id}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`group py-4 transition-all ${isExpanded ? 'bg-surface/30 px-6 -mx-6 rounded-xl' : ''}`}
                        >
                            {/* Header Row */}
                            <div 
                                className="flex justify-between items-start gap-4 cursor-pointer"
                                onClick={() => toggleJob(exp.id)}
                            >
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-0.5">
                                        <h3 className="text-lg font-bold text-text-primary tracking-tight">
                                            {exp.company}
                                        </h3>
                                        
                                        {exp.isCurrent && (
                                            <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold text-text-primary uppercase tracking-wider">
                                                Working
                                            </span>
                                        )}

                                        {/* Desktop Arrow */}
                                        <div className="hidden md:flex opacity-0 group-hover:opacity-100 text-text-secondary/40 transition-all duration-300">
                                            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                        </div>

                                        {/* Mobile Arrow */}
                                        <div className="md:hidden">
                                            <motion.div 
                                                variants={{
                                                    initial: { opacity: 0, x: -2 },
                                                    view: { opacity: 0.4, x: 0 }
                                                }}
                                                initial="initial"
                                                whileInView="view"
                                                viewport={{ once: false, amount: 0.4 }}
                                                className="text-text-secondary/40"
                                            >
                                                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-text-secondary font-medium">
                                        {exp.role}
                                    </div>
                                </div>

                                <div className="text-right flex-shrink-0 pt-0.5">
                                    <div className="text-xs text-text-primary font-medium tracking-tight">
                                        {exp.duration}
                                    </div>
                                    <div className="text-xs text-text-secondary font-medium">
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
                                        className="overflow-visible"
                                    >
                                        <div className="pt-8 pb-4 border-t border-border/50 mt-6 space-y-8">
                                            {/* Technologies */}
                                            <div>
                                                <div className="text-sm font-medium text-text-primary mb-4">Technologies & Tools</div>
                                                <div className="flex gap-3 flex-wrap px-2">
                                                    {exp.technologies.map((tech) => (
                                                        <div key={`${exp.id}-${tech.name}`} className="relative w-10 h-10 flex items-center justify-center">
                                                            <motion.button
                                                                type="button"
                                                                onMouseEnter={() => setHoveredTech(`${exp.id}-${tech.name}`)}
                                                                onMouseLeave={() => setHoveredTech(null)}
                                                                onFocus={() => setHoveredTech(`${exp.id}-${tech.name}`)}
                                                                onBlur={() => setHoveredTech(null)}
                                                                whileHover={{
                                                                    y: -5,
                                                                    scale: 1.1,
                                                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                                                }}
                                                                className="w-10 h-10 rounded-full bg-surface-hover border border-border/50 grid place-items-center shadow-sm cursor-pointer relative appearance-none"
                                                            >
                                                                {tech.name === 'Vercel' ? (
                                                                    <div 
                                                                        className="w-4 h-4 bg-text-primary" 
                                                                        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                                                                        aria-label="Vercel"
                                                                    />
                                                                ) : (
                                                                    <img 
                                                                        src={tech.icon} 
                                                                        alt={tech.name} 
                                                                        className="w-5 h-5 object-contain transition-all duration-300" 
                                                                    />
                                                                )}
                                                            </motion.button>

                                                            <AnimatePresence>
                                                                {hoveredTech === `${exp.id}-${tech.name}` && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                                                                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                                                                        exit={{ opacity: 0, y: 5, x: "-50%" }}
                                                                        transition={{ duration: 0.15 }}
                                                                        className="absolute -top-12 left-1/2 px-3 py-1.5 rounded-lg bg-text-primary border border-text-primary shadow-2xl text-bg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap z-[9999] pointer-events-none"
                                                                    >
                                                                        {tech.name}
                                                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-text-primary rotate-45" />
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* What I've Done */}
                                            <div>
                                                <div className="text-sm font-medium text-text-primary mb-4">What I've done</div>
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
