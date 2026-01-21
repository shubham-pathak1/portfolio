import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const SpotifyCard = () => {
    // For now, using polished static data. 
    // This can be easily connected to Lanyard API for live data later.
    const song = {
        title: "No Love",
        artist: "Shubh",
        cover: "https://i.scdn.co/image/ab67616d0000b27376045330364956bc566a7b29", // Real cover for No Love by Shubh
        status: "Last played"
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-sm rounded-2xl bg-surface/50 backdrop-blur-md border border-border/50 p-4 transition-all hover:bg-surface/80 group"
        >
            <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                    <img
                        src={song.cover}
                        alt={song.title}
                        className="w-14 h-14 rounded-lg object-cover shadow-lg group-hover:rotate-3 transition-transform duration-500"
                    />
                    {/* Animated Glow behind cover */}
                    <div className="absolute inset-0 bg-primary/20 blur-md -z-10 rounded-lg group-hover:scale-125 transition-transform duration-700" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-4 text-[#1DB954]">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.503 17.302c-.216.354-.675.466-1.028.249-2.857-1.746-6.453-2.141-10.687-1.173-.406.092-.814-.16-.906-.565-.092-.405.159-.813.565-.905 4.634-1.06 8.599-.611 11.8 1.346.354.217.466.674.256 1.048zm1.468-3.258c-.272.443-.848.583-1.291.311-3.27-2.01-8.256-2.593-12.124-1.417-.5.152-1.025-.133-1.177-.633-.151-.5.133-1.025.633-1.177 4.42-1.342 9.904-.687 13.651 1.615.443.272.583.848.311 1.291zm.128-3.395c-.327.534-1.024.704-1.558.378-3.832-2.277-10.14-2.486-13.805-1.373-.614.186-1.264-.17-1.45-.784-.185-.615.17-1.265.784-1.45 4.316-1.31 11.288-1.067 15.65 1.524.534.327.704 1.024.378 1.558z" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                            {song.status}
                        </span>
                    </div>
                    <h4 className="text-sm font-bold text-text-primary truncate">{song.title}</h4>
                    <p className="text-[12px] text-text-secondary truncate">by {song.artist}</p>
                </div>

                <div className="shrink-0 w-8 h-8 rounded-full bg-surface-hover border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={14} className="text-text-primary fill-current" />
                </div>
            </div>

            {/* Micro progress bar for vibe */}
            <div className="mt-3 h-0.5 w-full bg-border/30 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-text-primary/40 rounded-full"
                />
            </div>
        </motion.div>
    );
};
