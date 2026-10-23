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
    features?: string[];
    whyBuilt: string[];
    techStack: { name: string; icon: string; isDarkIcon?: boolean; lightIcon?: string }[];
    impact?: string[];
    futurePlans?: string[];
    image: string;
    github: string;
    liveLink?: string;
    downloadLink?: string;
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
        image: "https://ik.imagekit.io/shubhampathak/portfolio/shonen.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/shonen",
        liveLink: "https://shonen-app.vercel.app/",
        category: "personal"
    },
    "orca": {
        id: "orca",
        title: "Orca",
        tagline: "A lightweight local music player built with Rust and Slint. Currently at the latest v0.1.7 alpha version with 60+ GitHub stars and 250+ cumulative downloads.",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "v0.1.7 Alpha Released",
        overview: "Orca is a desktop music player for local audio files. I started it because I wanted a minimal player with a clean UI and UX that stays lightweight and focused on everyday offline listening.",
        features: [
            "Offline playback, search, alphabetical browsing and nested music folders",
            "Songs, artists, albums, genres, playlists and one-click Liked Songs, with list and grid views",
            "Gapless playback, shuffle, repeat, queue reordering and session restore",
            "Synced and word-timed lyrics, click-to-seek, LRC import and online fetching",
            "Waveform and classic seekbars, compact player and full-player lyrics",
            "Song tags and embedded cover editing, bulk album, artist and genre tag updates",
            "Online artwork lookup, custom collection covers and M3U playlist import/export",
            "Light and dark themes, custom fonts, minimal mode, dynamic accents and cover backgrounds",
            "Windows media controls, tray integration and keyboard shortcuts"
        ],
        whyBuilt: [
            "I wanted a local music player that is minimal, lightweight, and focused purely on offline listening.",
            "Many available desktop players felt either visually outdated or bundled with extra features and services I didn't need.",
            "I wanted to build a native desktop app with Rust and Slint that combines a responsive interface with low resource usage."
        ],
        techStack: [
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Slint", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/slint-icon.png", isDarkIcon: true },
            { name: "Rodio", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "Lofty", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" }
        ],
        impact: [
            "Currently at the latest v0.1.7 alpha version with 60+ GitHub stars and 250+ cumulative downloads.",
            "Demonstrated that a native Rust and Slint desktop application can deliver a fluid UI with a minimal memory footprint."
        ],
        futurePlans: [
            "Cross-platform support: currently limited to Windows, with Linux support planned first, followed by macOS.",
            "Advanced equalizer and DSP audio filters."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/orca-logo.png",
        screenshots: [
            "https://ik.imagekit.io/shubhampathak/orca-web/full_player_lyrics.png?updatedAt=1791553259099",
            "https://ik.imagekit.io/shubhampathak/orca-web/library.png?updatedAt=1791553259613",
            "https://ik.imagekit.io/shubhampathak/orca-web/album.png?updatedAt=1791553259221",
            "https://ik.imagekit.io/shubhampathak/orca-web/metadata_editor.png?updatedAt=1791553259087"
        ],
        github: "https://github.com/shubham-pathak1/orca",
        liveLink: "https://orca-music.vercel.app/",
        downloadLink: "https://github.com/shubham-pathak1/orca/tags",
        ctaLabel: "Download Release",
        category: "personal"
    },
    "ciel": {
        id: "ciel",
        title: "Ciel",
        tagline: "An open-source download manager for HTTP and Torrent downloads, built with Tauri and Rust.",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "Daily Driver",
        overview: "Ciel is a lightweight personal download manager built with Tauri and Rust to handle multi-threaded HTTP downloads and torrents for my daily workflow.",
        features: [
            "Download files faster using a multi-threaded HTTP engine.",
            "Load magnet links and download torrents with content previews.",
            "Monitor your clipboard to automatically capture download links.",
            "Organize downloads automatically into categories like videos, music, and documents.",
            "Schedule downloads to start or pause at specific times."
        ],
        whyBuilt: [
            "I built Ciel as a personal download manager for my own daily use, focusing on speed, clean UI, and torrent support."
        ],
        techStack: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: "https://ik.imagekit.io/shubhampathak/portfolio/rust.png?tr=f-auto,lo-true" },
            { name: "React", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" },
            { name: "TypeScript", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/typescript-original.svg" }
        ],
        futurePlans: [
            "Cross-platform support for my Arch Linux setup."
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/ciel.png?tr=f-auto,lo-true",
        github: "https://github.com/shubham-pathak1/ciel",
        liveLink: "https://ciel-app.vercel.app",
        category: "personal"
    },
    "kanha-salad": {
        id: "kanha-salad",
        title: "Kanha Salad",
        tagline: "A subscription ordering platform for a local cloud kitchen with daily menu and slot management.",
        timeline: "1 month",
        role: "Full Stack Developer",
        team: "Team of 2",
        status: "Completed",
        overview: "A full-stack web application built for a local cloud kitchen, supporting recurring meal plan subscriptions, dynamic daily menus, and scheduled morning and evening delivery slots.",
        features: [
            "Recurring meal subscriptions with morning and evening delivery slot selection.",
            "Dynamic daily menu management with rotating salad options.",
            "User dashboard for tracking active subscriptions and order history.",
            "Responsive ordering flow optimized for both mobile and desktop screens."
        ],
        whyBuilt: [
            "The client needed a dedicated platform to handle recurring meal subscriptions instead of manual phone or messaging coordination.",
            "Built custom scheduling logic to manage morning and evening delivery windows alongside rotating menus."
        ],
        techStack: [
            { name: "Next.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nextjs-original.svg", isDarkIcon: true },
            { name: "MongoDB", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/mongodb-original.svg" },
            { name: "Tailwind CSS", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/tailwindcss-original.svg" }
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/kanha_salad.png?tr=f-auto,lo-true",
        github: "", // Client project, no public repo
        liveLink: "https://kanhasalad.in/",
        category: "freelance"
    },
    "shlok-datar": {
        id: "shlok-datar",
        title: "Shlok Datar's Portfolio",
        tagline: "A showcase website for a classical tabla player.",
        timeline: "1 week",
        role: "Frontend Developer",
        team: "Solo",
        status: "Live",
        overview: "This website serves as a digital portfolio for Shlok Datar, showcasing his Tabla and Navratri performances.",
        whyBuilt: [
            "To establish a digital presence for an artist.",
        ],
        techStack: [
            { name: "Next.js", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/nextjs-original.svg", isDarkIcon: true },
            { name: "React", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/react-original.svg" },
            { name: "Tailwind CSS", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/tailwindcss-original.svg" },
            { name: "Framer Motion", icon: "https://ik.imagekit.io/shubhampathak/portfolio/icons/framer-icon.svg" }
        ],
        image: "https://ik.imagekit.io/shubhampathak/portfolio/shlok_datar_portfolio?updatedAt=1789327562534",
        github: "", // Client project, no public repo
        liveLink: "https://shlokdatar.vercel.app/",
        category: "freelance"
    }
};