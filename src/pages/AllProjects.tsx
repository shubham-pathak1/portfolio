import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { projectDetails } from "../data/projectDetails";

export const AllProjects = () => {
    // Convert projectDetails object to array
    const projects = Object.values(projectDetails);
    const [filter, setFilter] = useState<'all' | 'personal' | 'freelance'>('all');
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

                {/* Projects List */}
                <div className="space-y-0">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ delay: index * 0.03 }}
                            >
                                <Link 
                                    to={`/project/${project.id}`}
                                    className="group block py-8 border-b border-border/50 hover:border-text-primary/30 transition-all"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-xl font-bold text-text-primary group-hover:text-text-primary transition-colors flex items-center gap-2">
                                                {project.title}
                                                <div className="flex gap-2">
                                                    {project.category === 'freelance' && (
                                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-hover border border-border text-text-secondary uppercase tracking-widest">Freelance</span>
                                                    )}
                                                    {isInDevelopmentStatus(project.status) && (
                                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-text-primary uppercase tracking-widest">In Dev</span>
                                                    )}
                                                </div>
                                            </h3>
                                            <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
                                                {project.tagline}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-xs font-mono">{project.id}.archive</span>
                                            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                                                <ExternalLink size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </Layout>
    );
};
