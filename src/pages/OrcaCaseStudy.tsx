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
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 shrink-0">
                            <img
                                src={project.image}
                                alt="Orca logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Orca</h1>
                    </div>
                    <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
                        A lightweight desktop music player for local audio files, built with Rust and Slint.
                    </p>
                </header>

                <section className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-5">Context & Motivation</h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <div className="flex gap-3 items-start">
                                <span className="text-text-primary text-xl leading-none">•</span>
                                <p>I wanted a local music player that is minimal, lightweight, and focused purely on offline listening.</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="text-text-primary text-xl leading-none">•</span>
                                <p>Many existing players either felt visually outdated or came bundled with extra services and features I didn't need. The goal was to build a clean native player with thoughtful UI and UX that stays fast and unobtrusive.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-5">Key Features</h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            {[
                                "Native local playback for lossless and standard formats including FLAC, WAV, ALAC, and AIFF.",
                                "Synchronized and static lyrics fetched automatically via LRCLIB.",
                                "Built-in metadata editor for modifying track titles, artists, and album information.",
                                "Automatic artwork retrieval for tracks and albums via iTunes API.",
                                "System tray integration for unobtrusive background playback.",
                                "Global keyboard shortcuts and fast local folder scanning.",
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
                            <h2 className="text-2xl font-bold mb-5">Interface</h2>
                            <div className="grid gap-4 md:gap-5">
                                <figure className="rounded-2xl overflow-hidden border border-border/50 bg-surface/30">
                                    <img
                                        src={screenshots[0]}
                                        alt="Orca player and lyrics view"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto object-cover"
                                    />
                                    <figcaption className="px-4 py-3 text-xs text-text-secondary border-t border-border/50">
                                        Full player view with album artwork and synchronized lyrics.
                                    </figcaption>
                                </figure>

                                {screenshots.length > 2 && (
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
                                                Library view with track search, sorting, and folder navigation.
                                            </figcaption>
                                        </figure>

                                        <figure className="rounded-2xl overflow-hidden border border-border/50 bg-surface/30">
                                            <img
                                                src={screenshots[2]}
                                                alt="Orca album collection view"
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover"
                                            />
                                            <figcaption className="px-4 py-3 text-xs text-text-secondary border-t border-border/50">
                                                Albums view displaying retrieved cover artwork in a clean grid.
                                            </figcaption>
                                        </figure>
                                    </div>
                                )}

                                {screenshots.length > 3 && (
                                    <figure className="rounded-2xl overflow-hidden border border-border/50 bg-surface/30">
                                        <img
                                            src={screenshots[3]}
                                            alt="Orca metadata editor"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-auto object-cover"
                                        />
                                        <figcaption className="px-4 py-3 text-xs text-text-secondary border-t border-border/50">
                                            In-app metadata editor for editing audio tags without external software.
                                        </figcaption>
                                    </figure>
                                )}
                            </div>
                        </section>
                    )}

                    <section>
                        <h2 className="text-2xl font-bold mb-5">Tech Stack & Architecture</h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <p>
                                Orca is built natively with <strong>Rust</strong> and <strong>Slint</strong>:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                                <li>
                                    <strong>Rust</strong> handles audio decoding (via Rodio), audio metadata extraction and writing (via Lofty), filesystem scanning, and system tray integration. This keeps idle CPU usage near zero and guarantees memory safety.
                                </li>
                                <li>
                                    <strong>Slint</strong> serves as the declarative GUI toolkit. It compiles directly into native machine code without bundling a web browser engine, maintaining snappy UI responsiveness and a compact binary size.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-5">Current Status & Roadmap</h2>
                        <p className="text-text-secondary leading-relaxed max-w-4xl mb-4">
                            Orca is currently at the latest <strong>v0.1.7 alpha</strong> release with <strong>60+ GitHub stars</strong> and 100+ cumulative downloads. It is currently limited to <strong>Windows</strong>.
                        </p>
                        <div className="space-y-2 text-text-secondary">
                            <p className="font-medium text-text-primary">Planned improvements:</p>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>Cross-platform support: Linux support planned first, followed by macOS.</li>
                                <li>Advanced equalizer and DSP audio filters.</li>
                            </ul>
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