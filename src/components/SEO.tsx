import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    children?: React.ReactNode;
}

export const SEO = ({
    title = "Shubham Pathak | Software Engineer & Freelance Developer Vadodara",
    description = "Full-stack developer and freelancer based in Vadodara, Gujarat. Specialized in Front-end (React) and Back-end (Rust/Node.js). Hire for high-performance software systems.",
    image = "/favicon.png",
    url = "https://shubhampathak.vercel.app/",
    type = "website",
    children
}: SEOProps) => {
    const siteTitle = title === "Shubham Pathak | Software Engineer & Freelance Developer Vadodara" ? title : `${title} | Shubham Pathak`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="Shubham Pathak, Software Engineer Vadodara, Full Stack Developer India, Front End Developer Gujarat, Freelance Web Developer, Hire Developer Vadodara, React Specialist, Rust Engineer" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* JSON-LD Schema.org Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Shubham Pathak",
                    "url": "https://shubhampathak.vercel.app/",
                    "jobTitle": "Full Stack Developer",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Vadodara",
                        "addressRegion": "Gujarat",
                        "addressCountry": "India"
                    },
                    "sameAs": [
                        "https://github.com/shubham-pathak1",
                        "https://www.linkedin.com/in/shubham-pathak-05366b272/"
                    ],
                    "knowsAbout": [
                        "Full Stack Development", "Front End Development", "React", "TypeScript", "Rust", "Node.js", "Interaction Design"
                    ],
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Redspark Technologies"
                    },
                    "description": description,
                    "image": image
                })}
            </script>
            {children}
        </Helmet>
    );
};
