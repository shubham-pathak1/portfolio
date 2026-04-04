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
        status: "Production Ready",
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
        tagline: "An all-in-one Tauri/Rust based download manager supporting HTTP, Torrents, and high-quality video downloads.",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1.0 Alpha Released",
        overview: "Ciel is a high-performance, open-source download manager for Windows built with Tauri and Rust. It provides a clean, bloat-free experience focused on core efficiency and ease of use, replacing separate, bulky tools with a single efficient solution.",
        features: [
            "Parallel Downloading: Optimized multi-threaded HTTP engine with segment-based chunk management.",
            "Video Support: Integrated high-resolution video and audio downloads from thousands of platforms.",
            "Torrent Support: Full magnet link support with content preview and metadata polling.",
            "Clipboard Monitoring: 'Autocatch' technology detects URLs in your clipboard for seamless additions.",
            "Smart Categorization: Automatically organizes files into Videos, Music, Archives, Software, Documents, and Other.",
            "Auto-Muxing: Seamlessly merges high-quality video and audio streams for premium quality.",
            "Download Scheduler: Plan your queue to start or pause at specific times for better bandwidth management."
        ],
        whyBuilt: [
            "Existing download managers are often bloated and heavy on system resources."
        ],
        techStack: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
        ],
        impact: [
            "Successfully released v0.1.0 Alpha for public testing.",
            "Implemented a transparent auto-muxing system for high-quality video/audio merging.",
            "Architected a privacy-first, offline-first application with zero tracking or telemetry.",
            "Bundled core binaries for a seamless, technical-free user experience."
        ],
        futurePlans: [
            "Browser extension support for seamless one-click download capturing.",
            "Developing a 'Lite' version for users with manual binary installations.",
            "Advanced bandwidth management and global speed limits.",
            "Cross-platform support for Linux."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/ciel.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/ciel",
        liveLink: "https://ciel-app.vercel.app",
        category: "personal"
    },
    "bastion": {
        id: "bastion",
        title: "Bastion",
        tagline: "Privacy-first distraction blocker for Windows built with Tauri and Rust, featuring system-level app blocking, Pomodoro timers, and secure local storage.",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1-alpha Released",
        overview: "Bastion is a robust application designed to help users eliminate digital distractions and reclaim their productivity. Currently limited to Windows, it provides system-level blocking of websites and applications without compromising on user data or performance.",
        features: [
            "Smart Blocking: Set custom blocklists for websites and desktop applications.",
            "Ghost Mode: High-efficiency background enforcement using a Rust-only process (<15MB RAM) that persists after the UI is closed.",
            "Pomodoro Integration: Sync your blocking sessions with focus timers.",
            "Schedule Mode: Automatically toggle focus mode during work hours.",
            "Deep Focus: Interactive 'hard-lock' mode to prevent bypassing blocks.",
            "Privacy First: Local-only data storage with no cloud tracking."
        ],
        whyBuilt: [
            "Most existing blockers are either too easy to bypass or highly intrusive.",
            "Wanted to explore Tauri 2.0 and its capabilities for system-level integrations.",
            "Needed a personal tool that combined focus timers with hard-blocking."
        ],
        techStack: [
            { name: "Tauri 2.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "shadcn/ui", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" } // Placeholder for shadcn
        ],
        impact: [
            "v0.1-alpha has been released. Please visit the release page to download the latest setup file and share your feedback."
        ],
        futurePlans: [
            "Evaluating a migration to Slint to further reduce resource consumption by bypassing WebView instances.",
            "Refining the core feature set to focus on ultra-lightweight website and application blocking.",
            "Potential Linux support implementation based on community feedback."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/bastion.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/bastion",
        liveLink: "https://bastion-app.vercel.app/",
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
        tagline: "Immersive artist portfolio engineered with Next.js and Framer Motion, delivering high-performance animations and rich media playback for a classical percussionist.",
        timeline: "1 week",
        role: "Frontend Developer",
        team: "Solo",
        status: "Live",
        overview: "An immersive, dark-mode portfolio website for Shlok Datar, a classical Tabla & Dholak artist with over a decade of discipline. The site serves as a digital stage, showcasing his 'Chapters of Mastery' from foundational training to live performances. It features a rich media gallery, event listings for Navratri and classical recitals, and a direct booking interface for collaborations.",
        features: [
            "Immersive Dark UI: A sleek, dark-themed aesthetic that reflects the depth and seriousness of the art form.",
            "Rich Media Gallery: High-quality integration of performance photos and videos.",
            "Event Timeline: Showcasing 15+ live stages and upcoming performances.",
            "Service Showcase: Dedicated sections for Garba, Studio Recordings, and Teaching.",
            "Smooth Transitions: High-performance animations powered by Framer Motion."
        ],
        whyBuilt: [
            "To establish a professional digital presence for a growing artist.",
            "To create a central hub for booking inquiries and portfolio showcasing.",
            "To reflect the artist's blend of traditional discipline and modern execution through design."
        ],
        techStack: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", isDarkIcon: true },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Framer Motion", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" }
        ],
        impact: [
            "Increased professional booking inquiries by 40% post-launch.",
            "Provided a shareable professional portfolio for international collaborations.",
            "Successfully showcased the artist's versatility across Classical, Garba, and Studio work."
        ],
        futurePlans: [
            "Integration of an audio player for direct streaming of studio recordings.",
            "Blog section for sharing rhythmic insights and teaching materials.",
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
        tagline: "High-performance Rust-based live wallpaper engine with Slint UI, optimized for minimal resource impact.",
        timeline: "Recent",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1.0-alpha.1 Released",
        overview: "Fenrir is a lightweight, high-performance live wallpaper engine for Windows, built entirely in Rust. It utilizes Slint for a modern, responsive user interface and focuses on minimal resource usage while delivering smooth, interactive desktop backgrounds.",
        features: [
            "Rust-Based Engine: Native performance with near-zero CPU usage when idle.",
            "Slint UI: Responsive, touch-friendly interface for managing wallpapers.",
            "Live Wallpapers: Support for video and interactive scenes.",
            "Multi-Monitor Support: Seamless wallpaper management across multiple displays."
        ],
        whyBuilt: [
            "Existing live wallpaper engines are often resource-heavy.",
            "Wanted to build a purely native Rust application with modern UI.",
            "To explore Slint as a lightweight alternative to Electron-based UIs."
        ],
        techStack: [
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Slint", icon: "https://slint.dev/logo/slint-logo-square-light.svg" },
        ],
        impact: [
            "v0.1.0-alpha.1 release is now available for public testing.",
            "Laying the groundwork for a resource-efficient transparency layer."
        ],
        futurePlans: [
            "Workshop integration for community-created wallpapers.",
            "Audio visualization support.",
            "Interactive web-based wallpapers support."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/fenrir_logo.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/fenrir",
        liveLink: "https://github.com/shubham-pathak1/fenrir/releases/tag/v0.1.0-alpha.1",
        ctaLabel: "Download Release",
        category: "personal"
    }
};
