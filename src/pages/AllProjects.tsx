import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { projectDetails } from "../data/projectDetails";

export const AllProjects = () => {
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
                description="Everything I've built."
                url="https://portfolio-shubham-pathak1.vercel.app/projects"
            />

            <div className="pb-20 min-h-screen">
                {/* Header */}
                <div className="mb-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-6 transition-colors group text-sm"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Projects</h1>
                            <p className="mt-1 text-text-secondary text-sm">Everything I've built so far.</p>
                        </div>

                        {/* Filter */}
                        <div className="flex items-center gap-1 p-1 bg-surface-hover/40 border border-border/50 rounded-xl self-start">
                            {(['all', 'personal', 'freelance'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    aria-pressed={filter === type}
                                    className={`relative px-3 py-1 text-xs font-bold capitalize rounded-lg transition-all ${
                                        filter === type
                                            ? 'bg-text-primary text-bg'
                                            : 'text-text-secondary hover:text-text-primary'
                                    }`}
                                >
                                    {type === 'all' ? 'All' : type}
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
                                    className="group block py-4 border-b border-border/50 hover:border-text-primary/30 transition-all"
                                >
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-bold text-text-primary transition-colors flex items-center gap-2">
                                            {project.title}
                                            <div className="flex gap-2">
                                                {project.category === 'freelance' && (
                                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-hover border border-border text-text-secondary uppercase tracking-widest">Freelance</span>
                                                )}
                                                {isInDevelopmentStatus(project.status) && (
                                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-text-primary uppercase tracking-widest">In Dev</span>
                                                )}
                                            </div>
                                            <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                                                <ArrowUpRight size={14} />
                                            </div>
                                        </h3>
                                        <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
                                            {project.tagline}
                                        </p>
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
