import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Fires once when the element first scrolls into view.
export const useInView = (options = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.15, ...options });
        observer.observe(el);
        return () => observer.disconnect();
        // Observe once on mount; options are read at setup time only.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [ref, inView];
};

const RevealBox = styled.div`
    width: 100%;
    opacity: ${p => (p.$visible ? 1 : 0)};
    transform: translateY(${p => (p.$visible ? "0" : "45px")});
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: ${p => p.$delay || "0s"};
    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        transform: none;
        transition: none;
    }
`;

// Wrap any content to fade + slide it up the first time it enters the viewport.
export const Reveal = ({ children, delay = "0s", className }) => {
    const [ref, inView] = useInView();
    return (
        <RevealBox ref={ref} $visible={inView} $delay={delay} className={className}>
            {children}
        </RevealBox>
    );
};
