"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface AnimatedThemeTogglerProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export function AnimatedThemeToggler({
    theme,
    toggleTheme,
}: AnimatedThemeTogglerProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`relative w-11 h-11 rounded-1xl grid place-items-center transition-all duration-200 hover:bg-surface-hover hover:-translate-y-1 ${theme === "dark"
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 0 : 1,
                    rotate: theme === "dark" ? 180 : 0,
                    opacity: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 grid place-items-center"
            >
                <Moon className="w-5 h-5 fill-current" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : -180,
                    opacity: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 grid place-items-center"
            >
                <Sun className="w-5 h-5 fill-current" />
            </motion.div>
        </motion.button>
    );
}
