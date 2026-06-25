// Conflict resolved
export interface ProjectDetail {
    id: string;
    title: string;
    tagline: string;
    timeline: string;
    role: string;
    team: string;
    status: string;
    overview: string;
    features: string[];
    whyBuilt: string[];
    techStack: { name: string; icon: string; isDarkIcon?: boolean; lightIcon?: string }[];
    impact: string[];
    futurePlans: string[];
    image: string;
    github: string;
    liveLink?: string;
    ctaLabel?: string;
    screenshots?: string[];
    category: 'personal' | 'freelance';
}

export const projectDetails: Record<string, ProjectDetail> = {
    "shonen": {
        id: "shonen",
        title: "Shonen",
        tagline: "A marketplace for manga, comics, and collectibles featuring dashboards for customers, admins, and sellers.",
        timeline: "2 months",
        role: "Full Stack Developer",
        team: "Solo",
        status: "Live",
        overview: "Shonen is a multi-vendor marketplace for manga, comics, and collectibles. Built to explore MERN stack development, it integrates custom merchant workflows, payment flows, and authentication.",
        features: [
            "Browse and purchase manga, comics, and action figures.",
            "Access dedicated dashboards customized for customers, admins, or sellers.",
            "Search items and filter products by category.",
            "List items and manage store inventory as a merchant.",
            "Open and resolve transaction disputes directly on the platform.",
            "Synchronize your cart and wishlist across devices.",
            "Log in securely using role-based JWT authentication."
        ],
        whyBuilt: [
            "To build a complete MERN stack application from scratch.",
            "To learn multi-role authorization and dashboard routing.",
            "To implement payment gateways and Cloudinary asset management.",
            "To create a storefront for the collectible community."
        ],
        techStack: [
            { name: "React", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" },
            { name: "Redux", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/redux-original.svg" },
            { name: "Node.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nodejs-original.svg" },
            { name: "Express.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/express.png?tr=f-auto,lo-true" },
            { name: "MongoDB", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/mongodb-original.svg" },
            { name: "Tailwind CSS", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/tailwindcss-original.svg" },
            { name: "Razorpay", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/razorpay.png" },
            { name: "Firebase", icon: "https://ik.imagekit.io/shubhampathak/portfolio/firebase_auth.png?tr=f-auto,lo-true" }
        ],
        impact: [
            "Architected a scalable multi-vendor system with real-time inventory management.",
            "Implemented a secure Razorpay payment flow with automated order tracking.",
            "Optimized media delivery using Cloudinary for high-fidelity collectible visuals.",
            "Designed an intuitive dispute resolution system to ensure platform trust."
        ],
        futurePlans: [
            "Implementing a real-time auction system for rare collectibles.",
            "Mobile app development for seamless on-the-go trading."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/shonen.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/shonen",
        liveLink: "https://shonen-app.vercel.app/",
        category: "personal"
    },
    "krishi-sangam": {
        id: "krishi-sangam",
        title: "Krishi Sangam",
        tagline: "A B2B agricultural marketplace connecting farmers directly with buyers, featuring price analytics.",
        timeline: "4 months",
        role: "Front End Developer",
        team: "Team of 4",
        status: "Beta",
        overview: "Krishi Sangam connects farmers directly with wholesalers and retailers. It replaces traditional intermediaries to establish direct pricing and traceable produce sales.",
        features: [
            "List crops, quantities, and expected prices as a farmer.",
            "Switch between English and regional languages.",
            "View real-time market price trend graphs from regional mandis.",
            "Complete transactions safely using an escrow payment system.",
            "Find and connect with local transport providers for crop delivery."
        ],
        whyBuilt: [
            "Farmers often lose up to 40% of their profit to intermediaries.",
            "Lack of price transparency in local mandis.",
            "I wanted to use technology to solve a genuine grassroots problem.",
            "To challenge myself with building a complex B2B marketplace architecture."
        ],
        techStack: [
            { name: "React.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" },
            { name: "Node.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nodejs-original.svg" },
            { name: "Express.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/express.png?tr=f-auto,lo-true" },
            { name: "MongoDB", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/mongodb-original.svg" },
            { name: "Tailwind CSS", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/tailwindcss-original.svg" }
        ],
        impact: [
            "Onboarded 50+ local farmers during the pilot phase.",
            "Processed over 1,000 kg of fresh produce orders.",
            "Reduced post-harvest wastage by 15% for participating farmers.",
            "Received 'Best Social Impact' nomination at college hackathon.",
            "Learned immense lessons about designing for low-literacy user groups."
        ],
        futurePlans: [
            "Integrate IoT sensors for soil quality monitoring.",
            "Blockchain integration for supply chain immutability.",
            "Voice-assisted listing for farmers who cannot type.",
            "Expansion to 3 neighboring districts."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/krishi_sangam.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/krishi-sangam",
        category: "personal"
    },
    "ciel": {
        id: "ciel",
        title: "Ciel",
        tagline: "An open-source download manager for HTTP and Torrent downloads, built with Tauri and Rust.",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1.0 Alpha Released",
        overview: "Ciel is an open-source download manager for Windows that handles multi-threaded HTTP downloads and torrent files.",
        features: [
            "Download files faster using a multi-threaded HTTP engine.",
            "Load magnet links and download torrents with content previews.",
            "Monitor your clipboard to automatically capture download links.",
            "Organize downloads automatically into categories like videos, music, and documents.",
            "Schedule downloads to start or pause at specific times."
        ],
        whyBuilt: [
            "I wanted to build a download manager that is lightweight, fast, and has a good UI/UX.",
            "I also wanted to be it open-source and free to use and support torrent downloads as well."
        ],
        techStack: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "React", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" },
            { name: "TypeScript", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/typescript-original.svg" }
        ],
        impact: [
            "Successfully released v0.1.0 Alpha for public testing.",
        ],
        futurePlans: [
            "Browser extension support for seamless one-click download capturing.",
            "Developing a 'Lite' version for users with manual binary installations.(might release a small tui utility for it)",
            "Advanced bandwidth management and global speed limits.",
            "Cross-platform support for Linux."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/ciel.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/ciel",
        liveLink: "https://ciel-app.vercel.app",
        category: "personal"
    },
    "kanha-salad": {
        id: "kanha-salad",
        title: "Kanha Salad",
        tagline: "A subscription kitchen platform featuring dynamic menu scheduling and dual-slot delivery.",
        timeline: "1 month",
        role: "Full Stack Developer",
        team: "Team of 2",
        status: "Live",
        overview: "Kanha Salad is the storefront and ordering system for a local healthy food delivery service, managing custom salad subscriptions and daily schedules.",
        features: [
            "View a rotating menu featuring daily salad selections.",
            "Subscribe to recurring salad meal plans.",
            "Select morning or evening delivery slots.",
            "Track active subscriptions and past orders.",
            "Order and manage meals from mobile or desktop screens."
        ],
        whyBuilt: [
            "To digitize the operations of a local cloud kitchen scaling its customer base.",
            "Needed a robust system to handle complex subscription models and delivery slots.",
            "To provide a premium, meaningful user experience that reflects the brand's 'organic conscience'."
        ],
        techStack: [
            { name: "Next.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nextjs-original.svg", isDarkIcon: true },
            { name: "MongoDB", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/mongodb-original.svg" },
            { name: "Tailwind CSS", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/tailwindcss-original.svg" }
        ],
        impact: [
            "Successfully launched and currently serving customers in Vadodara.",
            "Streamlined order processing, reducing manual coordination time by 60%.",
            "Enhanced brand visibility with a professional, high-end digital presence.",
            "Positive customer feedback on the ease of ordering and subscription management."
        ],
        futurePlans: [
            "Integration with third-party logistics partners for expanded delivery radius.",
            "Advanced personalized nutrition tracking for subscribers.",
            "Mobile app development for push notifications and instant re-ordering."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/kanha_salad.png?tr=f-auto,lo-true",
        github: "", // Client project, no public repo
        liveLink: "https://kanhasalad.in/",
        category: "freelance"
    },
    "shlok-datar": {
        id: "shlok-datar",
        title: "Shlok Datar's Portfolio",
        tagline: "A showcase website for a classical percussion artist.",
        timeline: "1 week",
        role: "Frontend Developer",
        team: "Solo",
        status: "Live",
        overview: "This website serves as a digital portfolio for Shlok Datar, showcasing his Tabla and Dholak performances, session work, and upcoming events.",
        features: [
            "Read about the artist's musical background and training.",
            "Browse performance videos and media galleries.",
            "View upcoming live concert dates and performance locations.",
            "Send inquiries for booking and collaboration."
        ],
        whyBuilt: [
            "To establish a digital presence for an artist.",
        ],
        techStack: [
            { name: "Next.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nextjs-original.svg", isDarkIcon: true },
            { name: "React", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" },
            { name: "Tailwind CSS", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/tailwindcss-original.svg" },
            { name: "Framer Motion", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/framer-icon.svg" }
        ],
        impact: [
            "Increased booking inquiries post-launch.",
            "Provided a shareable portfolio for collaborations.",
            "Successfully showcased the artist's versatility across Classical, Garba, and Studio work."
        ],
        futurePlans: [
            "Integration of an audio player for direct streaming of studio recordings.",
            "Blog section for sharing indie music.",
            "Calendar integration for real-time availability checking."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/shlok_datar.png?tr=f-auto,lo-true",
        github: "", // Client project, no public repo
        liveLink: "https://shlokdatar.vercel.app/",
        category: "freelance"
    },
    "fenrir": {
        id: "fenrir",
        title: "Fenrir",
        tagline: "A live wallpaper engine for Windows, built with Rust and Slint.",
        timeline: "Recent",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1.0-alphaReleased",
        overview: "Fenrir is a wallpaper manager for Windows. Built with Rust and Slint, it runs video and interactive scenes as desktop backgrounds with low CPU usage.",
        features: [
            "Set videos and interactive files as live desktop backgrounds.",
            "Manage your wallpaper library using a lightweight interface.",
            "Minimize system resource draw during background playback."
        ],
        whyBuilt: [
            "Existing live wallpaper engines are kinda bloated and resource heavy.",
            "Wanted to build a purely native Rust application whilst also leveraging slint for making a true cross platform and lightweight UI.",
        ],
        techStack: [
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Slint", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/slint-logo-square-light.svg" },
        ],
        impact: [
            "v0.1.0-alpha release is now available for public testing.",
        ],
        futurePlans: [
            "Workshop integration for community-created wallpapers.",
            "Adding web support(for yt videos)",
            "Adding linux support"
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/fenrir_logo.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/fenrir",
        liveLink: "https://github.com/shubham-pathak1/fenrir/releases/tag/v0.1.0-alpha.1",
        ctaLabel: "Download Release",
        category: "personal"
    },
    "orca": {
        id: "orca",
        title: "Orca",
        tagline: "A desktop music player for local files, built with Tauri, Rust, and Svelte.",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1.0 Alpha Released",
        overview: "Orca is a desktop music player for local audio files. Built with Tauri and Rust, it includes a 'Phantom Mode' designed to minimize system resource usage when minimized to the system tray.",
        features: [
            "Minimize the player to the system tray to run it in a low-resource 'Phantom Mode'.",
            "Play lossless audio formats including FLAC, WAV, ALAC, and AIFF natively.",
            "View synced and static lyrics as songs play.",
            "Edit track and album metadata tags directly within your library.",
            "Automatically fetch and sync lyrics from LRCLIB.",
            "Monitor sample rates, bitrates, and bit depths in real time during playback.",
            "Control audio playback using system-wide global shortcuts.",
            "Scan and organize local directories to build your music collection quickly."
        ],
        whyBuilt: [
            "To build a music player that uses fewer resources than Electron-based alternatives.",
            "To create a native audio player for Windows using Rust."
        ],
        techStack: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
            { name: "TypeScript", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/typescript-original.svg" },
            { name: "Rodio", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Lofty", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" }
        ],
        impact: [
            "Successfully released v0.1.0 Alpha for public testing."
        ],
        futurePlans: [
            "Advanced EQ and DSP filter implementation.",
            "Cloud metadata enrichment and album art fetching."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/orca_logo.png?tr=f-auto,lo-true",
        screenshots: [
            "https://ik.imagekit.io/shubhampathak/portfolio/orca_fullplayer.png?updatedAt=1782366637638",
            "https://ik.imagekit.io/shubhampathak/portfolio/orca_library.png?updatedAt=1782366595750",
            "https://ik.imagekit.io/shubhampathak/portfolio/lyrics.png?updatedAt=1782366886607"
        ],
        github: "https://github.com/shubham-pathak1/orca",
        liveLink: "https://github.com/shubham-pathak1/orca/releases/tag/v0.1.0-alpha",
        ctaLabel: "Download Release",
        category: "personal"
    }
};