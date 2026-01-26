import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { projectDetails } from "../../data/projectDetails";
import { useTheme } from "../../hooks/useTheme";

// Map centralized data to local format
const projects = Object.values(projectDetails).map(p => ({
    id: p.id,
    title: p.title,
    description: p.tagline, // Mapping tagline to description for the card
    category: p.category,
    tags: p.techStack, // Mapping techStack to tags
    image: p.image,
    link: p.liveLink || p.github,
    github: p.github
}));


export const Projects = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const { theme } = useTheme();

    // 1. Derive active category directly from URL or location state (Source of Truth)
    // This avoids "uSeState" synchronization issues and redundant state
    const typeParam = searchParams.get('type');
    const stateCategory = (location.state as Record<string, unknown>)?.targetCategory;

    let activeCategory: 'personal' | 'freelance' = 'personal';
    if (typeParam === 'personal' || typeParam === 'freelance') {
        activeCategory = typeParam;
    } else if (typeof stateCategory === 'string' && (stateCategory === 'personal' || stateCategory === 'freelance')) {
        activeCategory = stateCategory;
    }

    // 2. Handle Scroll to Section
    useEffect(() => {
        if (location.hash === '#projects') {
            const element = document.getElementById('projects');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 150);
            }
        }
    }, [location.hash]);

    const handleCategoryChange = (category: 'personal' | 'freelance') => {
        // Update URL, which will trigger a re-render with new derived state
        setSearchParams({ type: category }, { replace: true });
    };

    const filteredProjects = projects
        .filter(project => project.category === activeCategory)
        .filter(project => project.id !== 'mew');

    return (
        <section id="projects" className="mb-16">
            {/* Narrative Header */}
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-border/50 pb-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-2xl font-bold text-text-primary">Featured Projects</h2>
                </motion.div>

                <div className="flex bg-surface border border-border rounded-lg p-1 self-start md:self-auto">
                    <button
                        onClick={() => handleCategoryChange('personal')}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ${activeCategory === 'personal'
                            ? 'bg-text-primary text-bg shadow-sm'
                            : 'text-text-secondary hover:text-text-primary'
                            }`}
                    >
                        Personal Projects
                    </button>
                    <button
                        onClick={() => handleCategoryChange('freelance')}
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
                                <motion.img
                                    layoutId={`project-image-${project.id}`}
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    transition={{ type: "tween", duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                    className={`w-full h-full ${['ciel', 'bastion', 'kanha-salad'].includes(project.id) ? 'object-cover object-top' : 'object-cover'}`}
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
                                                src={tag.lightIcon && theme === 'light' ? tag.lightIcon : tag.icon}
                                                className={`w-3.5 h-3.5 rounded-full object-contain transition-all duration-300 filter ${tag.isDarkIcon && !tag.lightIcon ? 'dark:invert' : ''}`}
                                                alt={tag.name}
                                                loading="lazy"
                                                decoding="async"
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

            <div className="mt-12 text-center">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-surface border border-border text-text-primary font-bold hover:bg-surface-hover hover:scale-105 transition-all duration-300 shadow-sm"
                >
                    View All Projects
                    <ArrowUpRight size={18} />
                </Link>
            </div>
        </section >
    );
};
