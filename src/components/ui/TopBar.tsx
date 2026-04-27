import { Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const TopBar = () => {
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md border-b border-border/40 bg-bg/70 h-16">
            <div className="max-w-[900px] mx-auto h-full px-6 flex items-center justify-between">
                <nav className="flex items-center gap-6">
                    <Link 
                        to="/" 
                        className={`text-sm font-medium transition-colors hover:text-text-primary ${location.pathname === '/' ? 'text-text-primary' : 'text-text-secondary'}`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/projects" 
                        className={`text-sm font-medium transition-colors hover:text-text-primary ${location.pathname === '/projects' ? 'text-text-primary' : 'text-text-secondary'}`}
                    >
                        Work
                    </Link>
                    <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors opacity-40 cursor-not-allowed">Blog</a>
                    <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors opacity-40 cursor-not-allowed">Resume</a>
                </nav>

                <div className="flex items-center gap-3">
                    <button 
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-hover border border-border text-text-secondary hover:text-text-primary transition-all group"
                        title="Command Palette (Coming Soon)"
                    >
                        <Search size={14} className="opacity-60 group-hover:opacity-100" />
                        <div className="flex items-center gap-1">
                            <span className="text-[10px] font-bold opacity-40 group-hover:opacity-70">Ctrl</span>
                            <span className="text-[10px] font-bold opacity-40 group-hover:opacity-70">K</span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};
