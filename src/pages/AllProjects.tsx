import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { projectDetails } from "../data/projectDetails";
import { useTheme } from "../hooks/useTheme";

export const AllProjects = () => {
    // Convert projectDetails object to array
    const projects = Object.values(projectDetails);
    const [filter, setFilter] = useState<'all' | 'personal' | 'freelance'>('all');
    const { theme } = useTheme();
    const isInDevelopmentStatus = (status: string) => status.toLowerCase().includes("development");

    const filteredProjects = projects.filter(project =>
        filter === 'all' ? true : project.category === filter
    );

    return (
        <Layout>
            <SEO
                title="All Projects"
                description="A comprehensive list of my open-source projects, freelance work, and experiments."
                url="https://portfolio-shubham-pathak1.vercel.app/projects"
            />

            <div className="pt-20 pb-20 container mx-auto px-6 min-h-screen">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="flex flex-col gap-8 items-center text-center mt-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                                All Projects
                            </h1>
                            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                                A complete archive of my engineering journey, featuring open-source tools, freelance products, and experimental engines.
                            </p>
                        </div>

                        {/* Filter Controls - Premium Segmented Control */}
                        <div className="flex p-1.5 bg-surface-hover/50 backdrop-blur-md border border-border/50 rounded-2xl self-center shadow-inner">
                            {(['all', 'personal', 'freelance'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    aria-pressed={filter === type}
                                    className="relative px-5 py-2 text-sm font-bold capitalize transition-colors"
                                >
                                    {filter === type && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-text-primary rounded-xl shadow-lg"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                        />
                                    )}
                                    <span className={`relative z-10 ${filter === type ? 'text-bg' : 'text-text-secondary hover:text-text-primary'} transition-colors duration-200`}>
                                        {type === 'all' ? 'All' : type}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group rounded-2xl bg-surface border border-border overflow-hidden transition-colors duration-300 flex flex-col h-full hover:border-text-secondary/30"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative bg-surface-hover">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className={`w-full h-full ${['ciel', 'bastion'].includes(project.id) ? 'object-cover object-top' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                                    />
                                    {/* Status Badge for In-Dev */}
                                    {isInDevelopmentStatus(project.status) && (
                                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                                            In Dev
                                        </div>
                                    )}
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 group-focus-within:translate-y-0">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${project.title} source code`}
                                                title="View Source"
                                                className="p-2 rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 transition-colors border border-white/10"
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {(project.liveLink) && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${project.title} live project`}
                                                title="Visit Project"
                                                className="p-2 rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 transition-colors border border-white/10"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
                                    <p className="text-text-secondary text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                        {project.tagline}
                                    </p>

                                    {/* Tech Stack Tags - Full List */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map(tag => (
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
                                        <Link
                                            to={`/project/${project.id}`}
                                            className="w-full py-2.5 rounded-xl border border-border text-sm font-medium text-text-primary transition-all duration-300 group-hover:border-text-primary flex items-center justify-center gap-2"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Layout>
    );
};
