
import { cn } from "../../lib/utils";

interface DockProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

// Custom SVGs from the user snippet
const HomeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const SunIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
);

const MoonIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export const Dock = ({ theme, toggleTheme }: DockProps) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-max">
            <div
                className={cn(
                    "flex gap-3 p-2.5 rounded-[20px] border shadow-lg backdrop-blur-md",
                    theme === "dark"
                        ? "bg-[rgba(15,15,15,0.8)] border-[rgba(255,255,255,0.1)]"
                        : "bg-[rgba(255,255,255,0.8)] border-[rgba(0,0,0,0.1)]"
                )}
                style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
            >
                <DockButton onClick={scrollToTop}>
                    <HomeIcon />
                </DockButton>

                <DockLink href="https://github.com/shubham-pathak1">
                    <GithubIcon />
                </DockLink>

                <DockLink href="mailto:shubhamxkcd@gmail.com">
                    <MailIcon />
                </DockLink>

                <div className="w-px bg-border mx-1 my-auto h-6" />

                <DockButton onClick={toggleTheme} id="theme-toggle">
                    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </DockButton>
            </div>
        </div>
    );
};

const DockButton = ({ children, onClick, id }: { children: React.ReactNode; onClick?: () => void; id?: string }) => (
    <button
        onClick={onClick}
        id={id}
        className="w-11 h-11 rounded-xl grid place-items-center text-text-secondary transition-all duration-200 hover:bg-surface-hover hover:text-text-primary hover:-translate-y-1"
    >
        {children}
    </button>
);

const DockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-xl grid place-items-center text-text-secondary transition-all duration-200 hover:bg-surface-hover hover:text-text-primary hover:-translate-y-1"
    >
        {children}
    </a>
);
