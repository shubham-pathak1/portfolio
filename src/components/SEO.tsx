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
    title = "Shubham Pathak | Portfolio",
    description = "A professional, high-performance web developer portfolio built with React, TypeScript, and Vite.",
    image = "/favicon.png",
    url = "https://portfolio-shubham-pathak1.vercel.app/",
    type = "website",
    children
}: SEOProps) => {
    const siteTitle = title === "Shubham Pathak | Portfolio" ? title : `${title} | Shubham Pathak`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
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
                    "url": "https://portfolio-shubham-pathak1.vercel.app/",
                    "jobTitle": "Software Engineer",
                    "sameAs": [
                        "https://github.com/shubham-pathak1",
                        "https://www.linkedin.com/in/shubham-pathak-05366b272/"
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
