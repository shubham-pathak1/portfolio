import { motion } from "framer-motion";
import {
    Calendar,
    Globe
} from "lucide-react";
const expressIcon = "https://res.cloudinary.com/dl5gp4c77/image/upload/v1769321353/express_xm5ofn.png";
const redsparkIcon = "https://res.cloudinary.com/dl5gp4c77/image/upload/v1769321358/redspark_dmlfmx.png";
const boltIotIcon = "https://res.cloudinary.com/dl5gp4c77/image/upload/v1769321353/bolt-iot_oy5x8w.png";

const experiences = [
    {
        id: "redspark",
        company: "Redspark Technologies",
        logo: redsparkIcon,
        role: "MERN Stack Intern",
        location: "Vadodara (On-site)",
        duration: "Jan 2026 - Ongoing",
        website: "https://redsparkinfo.com/",
        technologies: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Express.js", icon: expressIcon },
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
        logo: boltIotIcon,
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
                {/* Experience Group */}
                <div className="flex flex-col gap-6 lg:col-span-2">
                    {/* Narrative Header */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-2xl font-bold text-text-primary">Experience</h2>
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
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-surface border border-border overflow-hidden flex items-center justify-center shrink-0">
                                            <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" loading="lazy" decoding="async" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-text-primary leading-tight">{exp.role}</h3>
                                            <div className="flex items-center gap-2 text-sm text-text-secondary mt-1">
                                                <a
                                                    href={exp.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-medium text-text-primary hover:text-accent transition-colors flex items-center gap-1"
                                                >
                                                    {exp.company}
                                                    <Globe size={12} className="opacity-40" />
                                                </a>
                                                <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
                                                <span className="text-xs">{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-mono text-text-secondary bg-surface-hover px-2 py-1 rounded shrink-0 self-start sm:self-auto">
                                        <Calendar size={12} />
                                        {exp.duration}
                                    </div>
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
                                                className="w-4 h-4 rounded-full transition-all duration-300"
                                                alt={tech.name}
                                                loading="lazy"
                                                decoding="async"
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
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold text-text-primary">Education</h2>
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
                                className="p-6 rounded-2xl bg-surface border border-border hover:border-text-secondary/50 transition-colors group relative"
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-text-primary leading-tight mb-3">{edu.degree}</h3>
                                        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary bg-surface-hover px-2 py-1 rounded mb-4">
                                            <Calendar size={12} />
                                            {edu.year}
                                        </div>
                                    </div>

                                    <div className="text-sm text-text-secondary mt-auto">
                                        <div className="font-medium text-text-primary mb-0.5">{edu.school}</div>
                                        <div className="opacity-60">{edu.location}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
