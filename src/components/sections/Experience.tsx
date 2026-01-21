import { motion } from "framer-motion";
import {
    Calendar,
    GraduationCap,
    Globe
} from "lucide-react";

const experiences = [
    {
        id: "redspark",
        company: "Redspark Technologies",
        role: "MERN Stack Intern",
        location: "Vadodara (On-site)",
        duration: "Jan 2026 - Ongoing",
        website: "https://redsparkinfo.com/",
        technologies: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", isDarkIcon: true },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
        ],
        description: [
            "Actively learning and implementing MERN stack solutions for varied client projects.",
            "Collaborating with the development team to build and optimize scalable web applications.",
            "Participating in daily code reviews and contributing to architectural discussions."
        ]
    },
    {
        id: "bolt",
        company: "Bolt IoT",
        role: "Front-End Developer Intern",
        location: "Remote (India)",
        duration: "Dec 2022 - Feb 2023",
        website: "https://www.boltiot.com/",
        technologies: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ],
        description: [
            "Developed user-friendly, responsive interfaces to improve client interaction.",
            "Designed and implemented cross-device compatible layouts ensuring 100% responsiveness.",
            "Integrated RESTful APIs for real-time data updates and seamless user experience."
        ]
    }
];

export const Experience = () => {
    return (
        <section className="mb-16">
            {/* Experience Group */}
            <div className="flex flex-col gap-6 mb-16">
                {/* Narrative Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary mb-4 opacity-50">
                        02 — Experience
                    </div>
                    <h2 className="text-4xl font-bold text-text-primary">Professional Experience.</h2>
                </motion.div>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-surface border border-border hover:border-text-secondary/50 transition-colors group relative"
                        >
                            {/* Header Row: Role & Duration */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1.5">
                                <h3 className="text-xl font-bold text-text-primary leading-tight">{exp.role}</h3>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-text-secondary bg-surface-hover px-2 py-1 rounded shrink-0 self-start sm:self-auto mt-1 sm:mt-0">
                                    <Calendar size={12} />
                                    {exp.duration}
                                </div>
                            </div>

                            {/* Sub-Header: Company & Location */}
                            <div className="flex items-center gap-2 text-sm text-text-secondary mb-4 flex-wrap">
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 font-medium text-text-primary hover:text-accent transition-colors transition-all"
                                >
                                    {exp.company}
                                    <Globe size={12} className="opacity-40" />
                                </a>
                                <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
                                <span className="text-xs">{exp.location}</span>
                            </div>

                            {/* Description Points */}
                            <ul className="space-y-2 mb-5 list-disc ml-5 marker:text-text-secondary/60">
                                {exp.description.map((point, i) => (
                                    <li key={i} className="text-sm text-text-secondary leading-relaxed pl-1">
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex gap-2 flex-wrap">
                                {exp.technologies.map((tech) => (
                                    <span key={tech.name} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-hover text-xs font-mono text-text-secondary/80 hover:text-text-primary transition-colors">
                                        <img
                                            src={tech.icon}
                                            className={`w-3.5 h-3.5 transition-all duration-300 filter ${tech.isDarkIcon ? 'brightness-0 dark:brightness-0 dark:invert' : ''}`}
                                            alt={tech.name}
                                        />
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-text-secondary opacity-40"
                >
                    <GraduationCap size={16} />
                    Education
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                    {[
                        {
                            degree: "B.Tech in Computer Science",
                            school: "Navrachana University",
                            year: "2023 - Present",
                            location: "Vadodara"
                        },
                        {
                            degree: "Diploma in Computer Engineering",
                            school: "Parul University",
                            year: "2020 - 2023",
                            location: "Vadodara"
                        }
                    ].map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-2xl bg-surface border border-border hover:border-text-secondary/50 transition-colors group"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                                <h3 className="text-lg font-bold text-text-primary">{edu.degree}</h3>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-text-secondary bg-surface-hover px-2 py-1 rounded self-start sm:self-auto">
                                    <Calendar size={12} />
                                    {edu.year}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                                <span className="font-medium text-text-primary">{edu.school}</span>
                                <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
                                <span>{edu.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
