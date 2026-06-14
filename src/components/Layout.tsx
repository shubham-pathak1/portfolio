import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Dock } from "./ui/Dock";
import { SuminagashiBg } from "./ui/SuminagashiBg";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const { theme, toggleTheme } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen relative isolate">
            {/* Interactive Suminagashi Background */}
            <SuminagashiBg theme={theme} />

            <main className="flex-grow pt-10 md:pt-12 pb-20 relative z-10">
                <div className="container mx-auto px-6 max-w-[800px]">
                    {children}

                    {/* Global Footer */}
                    <footer className="mt-16 pt-12 border-t border-border text-center">
                        <div className="mb-4 font-bold text-lg tracking-tight">
                            Design & Developed by{" "}
                            <span className="text-text-primary">Shubham</span>
                        </div>
                        <div className="text-text-secondary text-sm">© {currentYear}. All rights reserved.</div>
                    </footer>
                </div>
            </main>

            {/* Floating Dock */}
            <Dock theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
};

