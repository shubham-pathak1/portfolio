import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const { pathname, hash } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: !reducedMotion,
            wheelMultiplier: 1,
            infinite: false,
        });

        lenisRef.current = lenis;

        let reqId: number;

        function raf(time: number) {
            lenis.raf(time);
            reqId = requestAnimationFrame(raf);
        }

        reqId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(reqId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        const lenis = lenisRef.current;
        if (!lenis) {
            return;
        }

        if (hash) {
            const targetId = decodeURIComponent(hash.slice(1));
            requestAnimationFrame(() => {
                const target = document.getElementById(targetId);
                if (target) {
                    lenis.scrollTo(target, { offset: -24 });
                }
            });
            return;
        }

        if (navigationType !== "POP") {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, hash, navigationType]);

    return <>{children}</>;
};
