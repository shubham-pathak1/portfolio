import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const notes = [
    {
        title: "What I noticed",
        body: "Most players I used felt old, heavy, or locked to one platform. That was the starting point for Orca."
    },
    {
        title: "What I tried to fix",
        body: "Orca is my attempt at a lighter local music player. I used Tauri, Rust, and Svelte because I wanted a smaller app, a cross-platform setup, and a stack I could keep improving without fighting the runtime too much."
    },
    {
        title: "What I kept first",
        body: "I started with the parts people actually use every day: tray mode, lyrics, metadata editing, cover art, shortcuts, and local library scanning. The idea was to keep it useful before trying to make it fancy."
    },
    {
        title: "What it shows",
        body: "This kind of work is closer to product thinking than a learning demo. I looked at what already existed, noticed the tradeoffs, cut the scope, and built around the basics first."
    }
];

export const CaseStudies = () => {
    return (
        <section id="case-studies" className="mb-20">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
            >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-text-secondary mb-3">
                    Case Studies
                    <span className="h-px w-10 bg-border/70" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">Why I made Orca</h2>
                <p className="text-text-secondary text-sm max-w-3xl leading-relaxed">
                    Not a full case study. Just the short version of how I thought about the project, what I compared, and why I picked the first features the way I did.
                </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
                {notes.map((note, index) => (
                    <motion.div
                        key={note.title}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                        className="rounded-2xl border border-border/50 bg-surface/40 p-5 md:p-6 backdrop-blur-sm"
                    >
                        <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="text-base font-bold text-text-primary tracking-tight">{note.title}</h3>
                            <ArrowUpRight size={14} className="text-text-secondary/60 shrink-0 mt-1" />
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">{note.body}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border/50 bg-surface/30 p-5 md:p-6">
                <p className="text-sm text-text-secondary leading-relaxed max-w-4xl">
                    For the roles I’m applying to, this is the part I care about most: noticing a problem, comparing what already exists, deciding what matters first, and being honest about what is still unfinished.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                    <span className="px-2.5 py-1 rounded-full border border-border/60">Product sense</span>
                    <span className="px-2.5 py-1 rounded-full border border-border/60">Research</span>
                    <span className="px-2.5 py-1 rounded-full border border-border/60">Prioritization</span>
                    <span className="px-2.5 py-1 rounded-full border border-border/60">Tradeoffs</span>
                </div>
            </div>

            <div className="mt-8 text-center">
                <Link
                    to="/project/orca"
                    className="inline-flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-text-primary transition-colors uppercase tracking-widest"
                >
                    Open Orca project
                    <ArrowUpRight size={14} />
                </Link>
            </div>
        </section>
    );
};