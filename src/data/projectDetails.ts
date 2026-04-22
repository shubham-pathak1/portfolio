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
        tagline: "A multi-vendor marketplace designed for manga, comics, and collectible enthusiasts with dedicated Customer, Admin, and Seller dashboards.",
        timeline: "2 months",
        role: "Full Stack Developer",
        team: "Solo",
        status: "Live",
        overview: "Shonen is a multi-vendor marketplace designed for manga, comics, and collectible enthusiasts. This platform provides a specialized ecosystem for both sellers and consumers, featuring a high-performance architectural design and a focus on visual consistency. It was built for learning the MERN stack, Tailwind CSS, Firebase integration, and Razorpay payment gateway.",
        features: [
            "Triple Dashboards: Dedicated interfaces for Customers, Admins, and Sellers.",
            "Consolidated Marketplace: Integrated platform for manga, comics, and high-end action figures.",
            "Advanced Navigation: Optimized search and category-based filtering.",
            "Vendor Management: Infrastructure supporting individual merchants and enterprise stores.",
            "Dispute Module: Integrated system for handling and resolving transaction issues.",
            "Data Integrity: Backend-synchronized cart and wishlist with cross-device persistence.",
            "Security: Robust JWT-based authentication with role-based permissions."
        ],
        whyBuilt: [
            "To build a production-grade MERN stack application from scratch.",
            "Mastering complex multi-role authorization and dashboard architectures.",
            "Implementing secure payment gateways and asset optimization using Cloudinary.",
            "Creating a dedicated space for the niche collectible community."
        ],
        techStack: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/express.png?tr=f-auto,lo-true" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
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
        tagline: "Digital B2B agricultural marketplace built on the MERN stack facilitating direct farmer-to-buyer trade, price analytics, and bilingual support.",
        timeline: "4 months",
        role: "Front End Developer",
        team: "Team of 4",
        status: "Beta",
        overview: "Krishi Sangam is a digital marketplace improving the agricultural supply chain. It eliminates middlemen by allowing farmers to list their produce directly for wholesalers and retailers. The platform creates a fair trade ecosystem where farmers get better prices and buyers get fresh, traceable produce.",
        features: [
            "Direct Listing: Farmers can upload crop details, quantity, and expected price.",
            "Bilingual Support: Interface available in English and regional languages.",
            "Price Trends: Real-time market graphs based on mandi prices.",
            "Secure Payments: Integrated escrow system for safe transactions.",
            "Logistics Support: Connects with local transport providers for delivery."
        ],
        whyBuilt: [
            "Farmers often lose up to 40% of their profit to intermediaries.",
            "Lack of price transparency in local mandis.",
            "I wanted to use technology to solve a genuine grassroots problem.",
            "To challenge myself with building a complex B2B marketplace architecture."
        ],
        techStack: [
            { name: "React.js", icon: "https://cdn.jsdelivr.gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/express.png?tr=f-auto,lo-true" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
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
        tagline: "An all-in-one Tauri/Rust based download manager supporting HTTP, Torrent downloads.",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1.0 Alpha Released",
        overview: "Ciel is a high-performance, open-source download manager for Windows built with Tauri and Rust.",
        features: [
            "Parallel Downloading: Optimized multi-threaded HTTP engine with segment-based chunk management.",
            "Torrent Support: Full magnet link support with content preview and metadata polling.",
            "Clipboard Monitoring: Autocatches links from clipboard.",
            "Smart Categorization: Automatically organizes files into Videos, Music, Archives, Software, Documents, and Other.",
            "Download Scheduler: Plan your queue to start or pause at specific times for better bandwidth management."
        ],
        whyBuilt: [
            "I wanted to build a download manager that is lightweight, fast, and has a good UI/UX.",
            "I also wanted to be it open-source and free to use and support torrent downloads as well."
        ],
        techStack: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
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
        tagline: "DTC cloud kitchen platform built with Next.js and MongoDB, featuring dynamic menu scheduling, Member workflows, and dual-slot delivery logic.",
        timeline: "1 month",
        role: "Full Stack Developer",
        team: "Team of 2",
        status: "Live",
        overview: "Kanha Salad is a premium cloud kitchen initiative based in Vadodara, fueled by a simple obsession: making healthy food taste like a celebration. The platform serves as the digital storefront for their daily handcrafted salad subscriptions and orders. It features a custom ordering flow, subscription management for 'Green Heart' members, and a dual-slot delivery system ensuring salads arrive at peak freshness.",
        features: [
            "Dynamic Menu System: Daily rotating menu with 'Presets', 'Hand-Prepped', and 'Born & Raised' collections.",
            "Subscription Management: Custom flows for 'Green Heart' membership and recurring orders.",
            "Time-Slot Scheduling: Intelligent delivery slot selection (Morning/Evening) for peak freshness.",
            "Order Archive: Users can track their 'Green Journey' and past orders.",
            "Responsive Design: Seamless experience across mobile and desktop for on-the-go ordering."
        ],
        whyBuilt: [
            "To digitize the operations of a local cloud kitchen scaling its customer base.",
            "Needed a robust system to handle complex subscription models and delivery slots.",
            "To provide a premium, meaningful user experience that reflects the brand's 'organic conscience'."
        ],
        techStack: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", isDarkIcon: true },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
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
        tagline: "A portfolio website for a classical percussionist.",
        timeline: "1 week",
        role: "Frontend Developer",
        team: "Solo",
        status: "Live",
        overview: "A portfolio website for Shlok Datar, a classical Tabla & Dholak artist. The site serves as a digital portfolio, showcasing his journey and skills. It features a media gallery, event listings.",
        features: [
            "Properly showcases his journey and skills.",
        ],
        whyBuilt: [
            "To establish a digital presence for an artist.",
        ],
        techStack: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", isDarkIcon: true },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Framer Motion", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" }
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
        tagline: "Fenrir is a lightweight, high-performance live wallpaper engine for Windows, built entirely in Rust, utilizing Slint for a lightweight cross-platform UI.",
        timeline: "Recent",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1.0-alphaReleased",
        overview: "Fenrir is a lightweight, high-performance live wallpaper engine for Windows, built entirely in Rust. It utilizes Slint for a modern, responsive user interface and focuses on minimal resource usage.",
        features: [
            "Rust-Based Engine: Native performance with lower CPU usage comapared to currently available live wallpaper engines.",
            "Slint UI: Responsive, touch-friendly interface for managing wallpapers.",
            "Live Wallpapers: Support for video and interactive scenes.",
        ],
        whyBuilt: [
            "Existing live wallpaper engines are kinda bloated and resource heavy.",
            "Wanted to build a purely native Rust application whilst also leveraging slint for making a true cross platform and lightweight UI.",
        ],
        techStack: [
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Slint", icon: "https://slint.dev/logo/slint-logo-square-light.svg" },
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
        tagline: "A lightweight, performant desktop music player for local files, built with Rust and the Slint.",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "Alpha 0.1.0 in Development",
        overview: "Orca is a high-performance desktop music player designed for audiophiles who value both quality and efficiency. Built with Rust, it features an ultra-low resource 'Phantom Mode' that minimizes system impact (<1% CPU) while hidden.",
        features: [
            "Phantom Mode: Extreme resource optimization (<1% CPU, <15MB RAM) when minimized to tray.",
            "Hi-Fi Support: Native playback of lossless formats including FLAC, WAV, ALAC, and AIFF.",
            "Lyrics Engine: Integrated support for synced (.lrc) and static text lyrics.",
            "Advanced Metadata: Real-time display of audio sample rates, bitrates, and bit depths.",
            "Global Shortcuts: System-wide playback and window management controls.",
            "Fast Indexing: Fast library scanning for large local music collections."
        ],
        whyBuilt: [
            "To solve the excessive resource consumption of modern Electron/Tauri based music players and making something which is lightweight but doesnt compromise on features or uiux.",
            "To provide a high-fidelity, native audio experience on Windows using Rust's safety and speed."
        ],
        techStack: [
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Slint", icon: "https://slint.dev/logo/slint-logo-square-light.svg" },
            { name: "Rodio", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Lofty", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" }
        ],
        impact: [
            "to be launched, current under development"
        ],
        futurePlans: [
            "Advanced EQ and DSP filter implementation.",
            "Cloud metadata enrichment and album art fetching.",
            "Playlist management and library organization tools."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/orca_logo.png?tr=f-auto,lo-true",
        screenshots: [
            "https://ik.imagekit.io/shubhampathak/portfolio/main_screen.png?tr=f-auto,lo-true",
            "https://ik.imagekit.io/shubhampathak/portfolio/main_player.png?tr=f-auto,lo-true"
        ],
        github: "https://github.com/shubham-pathak1/orca",
        category: "personal"
    }
};
