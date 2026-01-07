import expoIcon from "../assets/expo.jpg";
import krishiSangamImage from "../assets/krishi_sangam.png";
import throttleTalksImage from "../assets/throttle_talks.png";
import bastionImage from "../assets/bastion.png";
import rustIcon from "../assets/rust.png";
import firebaseAuthIcon from "../assets/firebase_auth.png";
import firebaseCloudstoreIcon from "../assets/firebase_cloudstore.png";
import firebaseStorageIcon from "../assets/firebase_storage.png";
import cielImage from "../assets/ciel.png";

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
    techStack: { name: string; icon: string }[];
    impact: string[];
    futurePlans: string[];
    image: string;
    github: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
    "throttle-talks": {
        id: "throttle-talks",
        title: "Throttle Talks",
        tagline: "Automotive community platform with real-time forums",
        timeline: "3 months",
        role: "Lead Developer",
        team: "Solo",
        status: "Under Development",
        overview: "Throttle Talks is a high-octane community platform designed for automotive enthusiasts. It bridges the gap between casual car lovers and hardcore gearheads by providing a real-time discussion forum, news feed, and spec comparison tool. Users can engage in heated debates about engines, share modification tips, or simply show off their rides.",
        features: [
            "Real-time Forums: Instant messaging and thread updates using Firebase.",
            "Garage Showcase: Users can upload and tag their vehicle mods.",
            "Spec Wars: Compare vehicle specifications side-by-side.",
            "Event Maps: Locate nearby car meets and track days.",
            "Expert Corner: Verified mechanics answer technical questions."
        ],
        whyBuilt: [
            "Existing automotive forums were outdated and mobile-unfriendly.",
            "Social media groups lacked organized technical knowledge.",
            "I wanted to create a dedicated space where the 'signal-to-noise' ratio was high.",
            "Needed a robust project to master React Native's ecosystem and Expo."
        ],
        techStack: [
            { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Expo", icon: expoIcon },
            { name: "Firebase Auth", icon: firebaseAuthIcon },
            { name: "Cloud Firestore", icon: firebaseCloudstoreIcon },
            { name: "Firebase Storage", icon: firebaseStorageIcon },
            { name: "Google Maps API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
        ],
        impact: [
            "Designed a scalable architecture capable of handling real-time data for thousands of users.",
            "Optimized app load times by 40% using lazy loading and caching.",
            "Solved critical data synchronization issues in real-time chat.",
            "built a robust notification system for instant updates."
        ],
        futurePlans: [
            "Implement an AI-driven 'Mechanic Bot' for common troubleshooting.",
            "Add a marketplace for aftermarket parts.",
            "Launch iOS version (currently Android only).",
            "Partner with local tracks for exclusive event ticketing."
        ],
        image: throttleTalksImage,
        github: "https://github.com/shubham-pathak1/throttle-talks"
    },
    "krishi-sangam": {
        id: "krishi-sangam",
        title: "Krishi Sangam",
        tagline: "Connecting farmers directly with buyers",
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
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
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
        image: krishiSangamImage,
        github: "https://github.com/shubham-pathak1/krishi-sangam"
    },
    "bastion": {
        id: "bastion",
        title: "Bastion",
        tagline: "Reclaim your focus with a privacy-first distraction blocker",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "In Development",
        overview: "Bastion is a robust application designed to help users eliminate digital distractions and reclaim their productivity. Currently limited to Windows, it provides system-level blocking of websites and applications without compromising on user data or performance.",
        features: [
            "Smart Blocking: Set custom blocklists for websites and desktop applications.",
            "Pomodoro Integration: Sync your blocking sessions with focus timers.",
            "Schedule Mode: Automatically toggle focus mode during work hours.",
            "Deep Focus: Interactive 'hard-lock' mode to prevent bypassing blocks.",
            "Privacy First: Local-only data storage with no cloud tracking."
        ],
        whyBuilt: [
            "Most existing blockers are either too easy to bypass or highly intrusive.",
            "Wanted to explore Tauri 2.0 and its capabilities for system-level integrations.",
            "Needed a personal tool that combined focus timers with hard-blocking.",
            "To solve the challenge of cross-platform system hooks using Rust."
        ],
        techStack: [
            { name: "Tauri 2.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: rustIcon },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "shadcn/ui", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" } // Placeholder for shadcn
        ],
        impact: [
            "Currently in development phase. If you are interested in testing it out or contributing, please feel free to reach out to me via mail."
        ],
        futurePlans: [
            "Add mobile companion app (Android) for synchronized blocking.",
            "Might add Linux support in future.",
            "Open-source core blocking modules for community contribution.",
            "Add team-based focus leaderboards."
        ],
        image: bastionImage,
        github: "https://github.com/shubham-pathak1/bastion"
    },
    "ciel": {
        id: "ciel",
        title: "Ciel",
        tagline: "Modern download manager for HTTP and Torrent protocols",
        timeline: "Ongoing",
        role: "Lead Developer",
        team: "Solo",
        status: "In Development",
        overview: "Ciel is a Rust-based, lightweight alternative to present-day downloaders. Capable of handling up to 32 concurrent connections, it provides a high-performance, unified environment for both HTTP and Torrent protocols, replacing separate, bloated tools with a single efficient solution.",
        features: [
            "Dual-Protocol Support: Seamlessly download via HTTP URLs or Torrent/Magnet links.",
            "High Concurrency: Supports up to 32 concurrent connections for accelerated speeds.",
            "Minimalist UI: A clean, distraction-free interface for managing your download queue.",
            "High Performance: Built on Rust for near-native speed and minimal resource usage."
        ],
        whyBuilt: [
            "Existing download managers are often bloated and heavy on system resources.",
            "Wanted a single tool to handle all types of downloads efficiently.",
            "To leverage Rust's concurrency for high-speed data transfer."
        ],
        techStack: [
            { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg" },
            { name: "Rust", icon: rustIcon },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
        ],
        impact: [
            "Yet to be launched as currently in development phase. If you want to test it out or contribute, please contact me via email."
        ],
        futurePlans: [
            "Browser extension support for seamless download capturing.",
            "Might increase concurrency limit (up to 128) based on community feedback.",
            "Add advanced scheduling and bandwidth management.",
            "Release public alpha for community feedback."
        ],
        image: cielImage,
        github: "https://github.com/shubham-pathak1/ciel"
    }
};
