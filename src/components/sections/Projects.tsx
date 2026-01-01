import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import expoIcon from "../../assets/expo.png";
import krishiSangamImage from "../../assets/krishi_sangam.png";
import throttleTalksImage from "../../assets/throttle_talks.png";
import bastionImage from "../../assets/bastion.png";
import rustIcon from "../../assets/rust.png";

interface Project {
    id: string; // Added ID
    title: string;
    description: string;
    tags: Array<{
        name: string;
        icon: string;
    }>;
    image: string;
    link: string;
    github: string;
}

const projects: Project[] = [
    {
        id: "throttle-talks",
        title: "Throttle Talks",
        description: "Automotive community platform with real-time forums.",
        tags: [
            { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Expo", icon: expoIcon },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
        ],
        image: throttleTalksImage,
        link: "https://github.com/shubham-pathak1/throttle-talks",
        github: "https://github.com/shubham-pathak1/throttle-talks"
    },
    {
        id: "krishi-sangam",
        title: "Krishi Sangam",
        description: "Connecting farmers directly with buyers.",
        tags: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        image: krishiSangamImage,
        link: "https://github.com/shubham-pathak1/krishi-sangam",
        github: "https://github.com/shubham-pathak1/krishi-sangam"
    },
    {
        id: "bastion",
        title: "Bastion",
        description: "Cross-platform distraction blocker with Pomodoro focus. (In Development Phase)",
        tags: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: rustIcon },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        image: bastionImage,
        link: "https://github.com/shubham-pathak1/bastion",
        github: "https://github.com/shubham-pathak1/bastion"
    }
];

export const Projects = () => {
    return (
        <section className="mb-20">
            <div className="flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-wider text-text-secondary border-b border-border pb-2">
                Featured Projects
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group rounded-2xl bg-surface border border-border overflow-hidden transition-colors duration-300 flex flex-col"
                    >
                        {/* Image Area */}
                        <div className="h-48 overflow-hidden relative bg-surface-hover">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                <a href={project.github} target="_blank" className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/80 transition-colors">
                                    <Github size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
                            <p className="text-text-secondary text-sm mb-6 flex-1">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-hover border border-border text-xs font-mono text-text-secondary">
                                        <img src={tag.icon} className="w-3.5 h-3.5" alt={tag.name} />
                                        {tag.name}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Link to={`/project/${project.id}`} className="w-full py-2.5 rounded-xl border border-border text-sm font-medium text-text-primary transition-all duration-300 group-hover:border-text-primary flex items-center justify-center gap-2">
                                    View Details
                                    <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
