import { motion } from "framer-motion";
import { Book, Film } from "lucide-react";

const personalItems = [
    {
        id: "books",
        title: "Books",
        description: "Books that have influenced my thinking and growth.",
        icon: Book,
        link: "#"
    },
    {
        id: "movies",
        title: "Movies",
        description: "Films and shows that have inspired and entertained me.",
        icon: Film,
        link: "#"
    }
];

export const Personal = () => {
    return (
        <section className="mb-32">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
            >
                <h2 className="text-3xl font-bold text-text-primary">Personal</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
                {personalItems.map((item, index) => (
                    <motion.a
                        key={item.id}
                        href={item.link}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-6 rounded-2xl bg-surface border border-border hover:border-text-secondary/50 transition-all duration-300 flex items-center gap-6"
                    >
                        <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border flex items-center justify-center text-text-secondary group-hover:text-text-primary transition-colors">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-primary mb-1">{item.title}</h3>
                            <p className="text-sm text-text-secondary">{item.description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
