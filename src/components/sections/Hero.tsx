import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
const profileImage = "https://res.cloudinary.com/dl5gp4c77/image/upload/v1769321359/my_img_tjddhb.jpg";

export const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12 mt-12 mb-32 min-h-[50vh] md:min-h-[60vh] py-12">
            <div className="flex-1 text-center md:text-left">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-8 leading-[1.05]">
                        Engineering <br />
                        <span className="text-text-secondary">high-performance</span> <br />
                        software systems.
                    </h1>

                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl font-medium">
                        Focused on the intersection of low-level performance,
                        Unix philosophy, and aesthetic systems design.
                        Building robust tools with Rust, TypeScript, and React.
                    </p>

                    <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
                        <div className="flex items-center gap-6 pr-4 border-r border-border">
                            <a href="https://github.com/shubham-pathak1" target="_blank" className="text-text-secondary hover:text-text-primary transition-all p-1"><Github size={22} /></a>
                            <a href="https://www.linkedin.com/in/shubham-pathak-05366b272/" target="_blank" className="text-text-secondary hover:text-text-primary transition-all p-1"><Linkedin size={22} /></a>
                            <a href="mailto:shubhamxkcd@gmail.com" className="text-text-secondary hover:text-text-primary transition-all p-1"><Mail size={22} /></a>
                        </div>
                        <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase opacity-40">Available for scale.</div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative hidden md:block"
            >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-border/50 relative z-10 p-1 group">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-surface">
                        <img
                            src={profileImage}
                            alt="Shubham Pathak"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-center scale-[1.8] grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-40" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 blur-[80px] -z-10 rounded-full scale-110" />
            </motion.div>
        </section>
    );
};
