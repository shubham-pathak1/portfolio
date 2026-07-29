import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { projectDetails } from "../data/projectDetails";

export const OrcaCaseStudy = () => {
    const project = projectDetails.orca;
    const screenshots = project.screenshots ?? [];

    return (
        <Layout className="max-w-[900px]">
            <SEO
                title="Orca Case Study"
                description={project.tagline}
                image={project.image}
                url="https://shubhampathak.vercel.app/case-studies/orca"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10 pb-20"
            >
                <Link
                    to={`/project/orca`}
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-10 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Orca
                </Link>

                <header className="mb-14">
                    <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-text-secondary">
                        Case study
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Orca</h1>
                    <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
                        A local music player I started because the desktop players I kept using felt heavy, dated, or stuck on one platform.
                    </p>
                </header>

                <section className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-5">Problem</h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <div className="flex gap-3 items-start">
                                <span className="text-text-primary text-xl leading-none">•</span>
                                <p>The players I kept comparing against all had a tradeoff I did not like: some felt old, some were too heavy, and some were tied to one platform.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="text-text-primary text-xl leading-none">•</span>
                                <p>I wanted something that still handled the everyday stuff people actually use, without turning into a big desktop app that eats memory for no good reason.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-5">Who this was for</h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            {[
                                "People who keep a local music library and want a simple player for it.",
                                "Users who care about lyrics, metadata, shortcuts, and quick library scanning.",
                                "People who want a cross-platform app that does not feel like a heavy web wrapper.",
                                "Mostly me first, but with a shape that could work for other people too.",
                            ].map((item) => (
                                <div key={item} className="flex gap-3 items-start">
                                    <span className="text-text-primary text-xl leading-none">•</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-5">What I decided to build first</h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            {[
                                "Tray support and Phantom Mode, so the app can stay out of the way.",
                                "Local playback for FLAC, WAV, ALAC, and AIFF.",
                                "Lyrics through LRCLIB, plus metadata editing inside the app.",
                                "Album, song, and artist cover fetching through iTunes.",
                                "Global shortcuts and quick folder scanning, because that is the part that makes a local player useful.",
                            ].map((item) => (
                                <div key={item} className="flex gap-3 items-start">
                                    <span className="text-text-primary text-xl leading-none">•</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {screenshots.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold mb-5">Screens</h2>
                            <div className="grid gap-4 md:gap-5">
                                <figure className="rounded-2xl overflow-hidden border border-border/50 bg-surface/30">
                                    <img
                                        src={screenshots[0]}
                                        alt="Orca player view"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto object-cover"
                                    />
                                    <figcaption className="px-4 py-3 text-xs text-text-secondary border-t border-border/50">
                                        Main player view. This is the screen people would sit on the longest.
                                    </figcaption>
                                </figure>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <figure className="rounded-2xl overflow-hidden border border-border/50 bg-surface/30">
                                        <img
                                            src={screenshots[1]}
                                            alt="Orca library view"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover"
                                        />
                                        <figcaption className="px-4 py-3 text-xs text-text-secondary border-t border-border/50">
                                            Library view. I wanted scanning and browsing to stay simple.
                                        </figcaption>
                                    </figure>

                                    <figure className="rounded-2xl overflow-hidden border border-border/50 bg-surface/30">
                                        <img
                                            src={screenshots[2]}
                                            alt="Orca lyrics view"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover"
                                        />
                                        <figcaption className="px-4 py-3 text-xs text-text-secondary border-t border-border/50">
                                            Lyrics view. This was one of the first useful features to get working.
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </section>
                    )}

                    <section>
                        <h2 className="text-2xl font-bold mb-5">Why this stack</h2>
                        <p className="text-text-secondary leading-relaxed max-w-4xl">
                            Tauri, Rust, and Svelte were the practical choice. I wanted the app to stay small, stay responsive, and not feel like the usual Electron route. GPUI is something I would only move to if it genuinely makes the app simpler or lighter.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-5">What happened next</h2>
                        <p className="text-text-secondary leading-relaxed max-w-4xl mb-4">
                            Orca reached v0.1.3 and I kept it open for testing. It is not finished, but it is far enough along to show the direction clearly.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                            <li>Better UI polish so it feels less rough around the edges.</li>
                            <li>More metadata cleanup and smarter cover fetching.</li>
                            <li>Possible GPUI work if it actually gives me a lighter app.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-5">What it says about my approach</h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            {[
                                "I start from the problem, not the stack.",
                                "I narrow scope instead of trying to build everything at once.",
                                "I care about tradeoffs, not just features.",
                                "I can turn a rough idea into something usable.",
                            ].map((item) => (
                                <div key={item} className="flex gap-3 items-start">
                                    <span className="text-text-primary text-xl leading-none">•</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>

                <div className="mt-14 flex flex-wrap gap-3">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-text-primary text-bg font-bold hover:opacity-90 transition-opacity"
                        >
                            <ExternalLink size={16} />
                            Visit Website
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-text-primary font-bold hover:bg-surface-hover transition-colors"
                        >
                            <Github size={16} />
                            View Source
                        </a>
                    )}
                    {project.downloadLink && (
                        <a
                            href={project.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-text-primary font-bold hover:bg-surface-hover transition-colors"
                        >
                            <ArrowUpRight size={16} />
                            Download Release
                        </a>
                    )}
                </div>
            </motion.div>
        </Layout>
    );
};