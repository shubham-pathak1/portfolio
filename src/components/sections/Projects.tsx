import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import expoIcon from "../../assets/expo.jpg";
import krishiSangamImage from "../../assets/krishi_sangam.png";
import throttleTalksImage from "../../assets/throttle_talks.png";
import bastionImage from "../../assets/bastion.png";
import cielImage from "../../assets/ciel.png";
import rustIcon from "../../assets/rust.png";

// Placeholder Images (Generated)
import kanhaSaladImage from "../../assets/kanha_salad.png";
import shlokDatarImage from "../../assets/shlok_datar.png";

interface Project {
    id: string;
    title: string;
    description: string;
    category: 'personal' | 'freelance';
    tags: Array<{
        name: string;
        icon: string;
        isDarkIcon?: boolean;
    }>;
    image: string;
    link: string;
    github?: string;
}

const projects: Project[] = [
    {
        id: "bastion",
        title: "Bastion",
        description: "Cross-platform distraction blocker with Pomodoro focus. Reclaim your productivity with system-level blocking. (In Development)",
        category: 'personal',
        tags: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: rustIcon },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        image: bastionImage,
        link: "https://github.com/shubham-pathak1/bastion",
        github: "https://github.com/shubham-pathak1/bastion"
    },
    {
        id: "throttle-talks",
        title: "Throttle Talks",
        description: "Automotive community platform with real-time forums. A high-octane space for gearheads to debate, share, and connect.",
        category: 'personal',
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
        description: "Connecting farmers directly with buyers. eliminating middlemen to ensure fair pricing and fresh produce.",
        category: 'personal',
        tags: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", isDarkIcon: true },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        image: krishiSangamImage,
        link: "https://github.com/shubham-pathak1/krishi-sangam",
        github: "https://github.com/shubham-pathak1/krishi-sangam"
    },
    {
        id: "ciel",
        title: "Ciel",
        description: "Modern download manager for HTTP and Torrent protocols. High-performance, Rust-based alternative to bloated tools. (In Development)",
        category: 'personal',
        tags: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: rustIcon },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ],
        image: cielImage,
        link: "https://github.com/shubham-pathak1/ciel",
        github: "https://github.com/shubham-pathak1/ciel"
    },
    {
        id: "kanha-salad",
        title: "Kanha Salad",
        description: "A premium cloud kitchen platform for gourmet vegetarian salads. Features a dynamic daily menu, subscription management for 'Green Heart' members, and dual-slot delivery scheduling.",
        category: 'freelance',
        tags: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", isDarkIcon: true },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        image: kanhaSaladImage,
        link: "https://kanhasalad.in/"
    },
    {
        id: "shlok-datar",
        title: "Shlok Datar",
        description: "High-performance portfolio for a classical tabla artist. Showcases a decade of discipline with an immersive dark-mode UI, event listings for live stages, and a rich media gallery.",
        category: 'freelance',
        tags: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", isDarkIcon: true },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        image: shlokDatarImage,
        link: "https://shlokdatar.vercel.app/"
    }
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<'personal' | 'freelance'>('personal');

    const filteredProjects = projects.filter(project => project.category === activeCategory);

    return (
        <section className="mb-20">
            {/* Header + Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-border pb-2">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-secondary">
                    Featured Projects
                </div>

                <div className="flex bg-surface border border-border rounded-lg p-1">
                    <button
                        onClick={() => setActiveCategory('personal')}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ${activeCategory === 'personal'
                            ? 'bg-text-primary text-bg shadow-sm'
                            : 'text-text-secondary hover:text-text-primary'
                            }`}
                    >
                        Personal Projects
                    </button>
                    <button
                        onClick={() => setActiveCategory('freelance')}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ${activeCategory === 'freelance'
                            ? 'bg-text-primary text-bg shadow-sm'
                            : 'text-text-secondary hover:text-text-primary'
                            }`}
                    >
                        Freelance Projects
                    </button>
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="group rounded-2xl bg-surface border border-border overflow-hidden transition-colors duration-300 flex flex-col"
                        >
                            {/* Image Area */}
                            <div className="h-48 overflow-hidden relative bg-surface-hover">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full ${['ciel', 'bastion'].includes(project.id) ? 'object-cover object-top' : 'object-cover'}`}
                                />
                                {project.github ? (
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/80 transition-colors">
                                            <Github size={16} />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/80 transition-colors">
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                ) : (
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                        <a href={project.link} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/80 transition-colors">
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
                                <p className="text-text-secondary text-sm mb-6 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-hover border border-border text-xs font-mono text-text-secondary">
                                            <img
                                                src={tag.icon}
                                                className={`w-3.5 h-3.5 object-contain transition-all duration-300 filter ${tag.isDarkIcon ? 'brightness-0 dark:brightness-0 dark:invert' : ''}`}
                                                alt={tag.name}
                                            />
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
                </AnimatePresence>
            </motion.div>
        </section>
    );
};
