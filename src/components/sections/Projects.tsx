import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { projectDetails } from "../../data/projectDetails";

// Map centralized data to local format and filter for the home page flexes
const projects = Object.values(projectDetails)
    .filter(p => !['shlok-datar', 'kanha-salad'].includes(p.id))
    .map(p => ({
        id: p.id,
        title: p.title,
        description: p.tagline,
        category: p.category,
        status: p.status,
    }));


export const Projects = () => {
    const isInDevelopmentStatus = (status: string) => status.toLowerCase().includes("development");

    return (
        <section id="projects" className="mb-8">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-4"
            >
                <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">Projects</h2>
                <p className="text-text-secondary text-sm">A few products and experiments I've shipped.</p>
            </motion.div>

            <div className="space-y-0">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <Link 
                            to={`/project/${project.id}`}
                            className="group block py-4 border-b border-border/50 hover:border-text-primary/30 transition-all"
                        >
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold text-text-primary group-hover:text-text-primary transition-colors flex items-center gap-2">
                                    {project.title}
                                    {isInDevelopmentStatus(project.status) && (
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-text-primary uppercase tracking-widest">In Dev</span>
                                    )}
                                    <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                                        <ArrowUpRight size={14} className="transition-all" />
                                    </div>
                                    <div className="md:hidden">
                                        <motion.div
                                            variants={{
                                                initial: { opacity: 0, x: -2 },
                                                view: { 
                                                    opacity: 0.7,
                                                    x: 0,
                                                    transition: { duration: 0.4 }
                                                }
                                            }}
                                            initial="initial"
                                            whileInView="view"
                                            viewport={{ once: false, amount: 0.4 }}
                                            className="transition-all pointer-events-none"
                                        >
                                            <ArrowUpRight size={14} className="transition-all" />
                                        </motion.div>
                                    </div>
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-text-primary transition-colors uppercase tracking-widest"
                >
                    View All Projects
                    <ArrowUpRight size={14} />
                </Link>
            </div>
        </section>
    );
};
