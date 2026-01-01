import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Briefcase, CircleDot } from "lucide-react";
import { projectDetails } from "../data/projectDetails";
import { Layout } from "../components/Layout";

export const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const project = id ? projectDetails[id] : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <Layout>
                <div className="min-h-[50vh] flex items-center justify-center text-text-primary">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">404</h1>
                        <p className="mb-8 text-text-secondary">Project not found</p>
                        <Link to="/" className="text-text-primary underline font-medium">Back to Home</Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="relative z-10">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-12 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                {/* Hero Section */}
                <header className="mb-16 fade-in">
                    <div className="mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{project.title}</h1>
                        <p className="text-xl text-text-secondary">{project.tagline}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-1 flex items-center gap-2">
                                <Calendar size={14} /> Timeline
                            </div>
                            <div className="font-medium">{project.timeline}</div>
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-1 flex items-center gap-2">
                                <Briefcase size={14} /> Role
                            </div>
                            <div className="font-medium">{project.role}</div>
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-1 flex items-center gap-2">
                                <Users size={14} /> Team
                            </div>
                            <div className="font-medium">{project.team}</div>
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-1 flex items-center gap-2">
                                <CircleDot size={14} /> Status
                            </div>
                            <div className="font-medium">{project.status}</div>
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="mb-20 rounded-2xl overflow-hidden border border-border bg-surface-hover aspect-video fade-in" style={{ animationDelay: '0.1s' }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`${['ciel', 'bastion'].includes(project.id) ? 'w-full h-full object-cover object-top' : 'w-full h-full object-cover'}`}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 fade-in" style={{ animationDelay: '0.2s' }}>

                    {/* Main Content */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                Overview
                            </h2>
                            <p className="text-text-secondary leading-loose text-lg">
                                {project.overview}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">What Users Can Do</h2>
                            <ul className="space-y-4">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex gap-4 p-4 rounded-xl bg-surface border border-border hover:border-text-secondary/30 transition-colors">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-text-primary text-bg flex items-center justify-center text-xs font-bold mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span className="text-text-secondary">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">Why I Built This</h2>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                {project.whyBuilt.map((reason, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <span className="text-text-primary text-xl leading-none">•</span>
                                        <p>{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">After Launch & Impact</h2>
                            <div className="grid gap-4">
                                {project.impact.map((item, i) => (
                                    <div key={i} className="p-5 rounded-xl bg-surface-hover/50 border border-border flex gap-4 items-center">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <p className="text-text-secondary font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">Future Plans</h2>
                            <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                                {project.futurePlans.map((plan, i) => (
                                    <li key={i}>{plan}</li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-10">
                        <div className="sticky top-10">
                            {/* Tech Stack */}
                            <div className="p-6 rounded-2xl bg-surface border border-border mb-8">
                                <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-text-secondary">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-hover border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors cursor-default">
                                            <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col gap-3">
                                {!['Under Development', 'In Development'].includes(project.status) && (
                                    <a
                                        href="#"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-text-primary text-bg font-bold hover:opacity-90 transition-opacity"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                )}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border text-text-primary font-bold hover:bg-surface-hover transition-colors"
                                >
                                    <Github size={18} />
                                    View Source
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Footer */}
                <footer className="mt-32 pt-12 border-t border-border text-center">
                    <div className="mb-4 font-bold text-lg tracking-tight">Design & Developed by Shubham</div>
                    <div className="text-text-secondary text-sm">© 2025. All rights reserved.</div>
                </footer>
            </div>
        </Layout>
    );
};
