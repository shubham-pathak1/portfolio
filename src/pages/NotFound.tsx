import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";

export const NotFound = () => {
    return (
        <>
            <SEO title="404: Page Not Found" description="The page you are looking for does not exist." />
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 fade-in">
                    <h1 className="text-8xl font-bold mb-4 tracking-tighter text-text-primary">
                        404
                    </h1>

                    <h2 className="text-2xl font-medium mb-12 text-text-secondary">
                        Page Not Found
                    </h2>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-text-primary/20 hover:border-text-primary text-text-primary font-medium transition-all hover:bg-surface-hover"
                    >
                        <ArrowLeft size={18} />
                        Return to Homepage
                    </Link>
                </div>
            </Layout>
        </>
    );
};
