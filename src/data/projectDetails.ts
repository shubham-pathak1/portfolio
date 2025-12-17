import expoIcon from "../assets/expo.png";

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
        status: "Live",
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
            { name: "Firebase Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Cloud Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Firebase Storage", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Google Maps API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
        ],
        impact: [
            "Grew to 500+ daily active users within the first month of beta.",
            "Facilitated over 10,000 messages in community threads.",
            "Featured in local automotive newsletters as a 'Top App for Petrolheads'.",
            "Successfully optimized app load times by 40% using lazy loading and caching.",
            "Solved critical data synchronization issues in real-time chat."
        ],
        futurePlans: [
            "Implement an AI-driven 'Mechanic Bot' for common troubleshooting.",
            "Add a marketplace for aftermarket parts.",
            "Launch iOS version (currently Android only).",
            "Partner with local tracks for exclusive event ticketing."
        ],
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop",
        github: "https://github.com/shubham-pathak1/throttle-talks"
    },
    "krishi-sangam": {
        id: "krishi-sangam",
        title: "Krishi Sangam",
        tagline: "Connecting farmers directly with buyers",
        timeline: "4 months",
        role: "Full Stack Developer",
        team: "Team of 2",
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
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
        github: "https://github.com/shubham-pathak1/krishi-sangam"
    }
};
