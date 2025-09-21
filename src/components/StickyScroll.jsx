import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export const StickyScroll = ({
    content = [],
    textContainerClass = "",
    imageClass = "",
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // ✅ Apply parallax to the entire section (both text + images together)
    const yParallax = useTransform(scrollY, [0, 1000], [0, -80]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const scrollPosition = window.innerHeight / 2;

            content.forEach((_, i) => {
                const section = document.getElementById(`section-${i}`);
                if (section) {
                    const { top: sectionTop, height: sectionHeight } =
                        section.getBoundingClientRect();
                    if (
                        sectionTop <= scrollPosition &&
                        sectionTop + sectionHeight > scrollPosition
                    ) {
                        setActiveIndex(i);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [content]);

    return (
        <motion.div
            ref={containerRef}
            style={{ y: yParallax }} // ✅ Parallax for whole container
            className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto"
        >
            {/* Text Section */}
            <div className="space-y-20 relative z-10">
                {content.map((item, i) => (
                    <div
                        key={i}
                        id={`section-${i}`}
                        className={`min-h-[80vh] flex flex-col justify-center transition-all duration-500 ${i === activeIndex ? "opacity-100 scale-100" : "opacity-50 scale-95"
                            }`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{
                                opacity: i === activeIndex ? 1 : 0.5,
                                y: i === activeIndex ? 0 : 20,
                            }}
                            transition={{ duration: 0.6 }}
                            className={textContainerClass}
                        >
                            <h2 className="text-3xl font-bold mb-4 bg-[#b68a59] bg-clip-text text-transparent">
                                {item.title}
                            </h2>
                            <p className="text-lg text-black">{item.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Sticky Image Section */}
            <div className="sticky top-60 h-[70vh] flex items-center justify-center overflow-hidden z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.97, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: -20 }}
                        transition={{
                            type: "spring",
                            stiffness: 70,
                            damping: 20,
                            mass: 0.8,
                            opacity: { duration: 0.8, ease: "easeInOut" },
                        }}
                        className={`absolute w-full h-full ${imageClass}`}
                    >
                        {content[activeIndex].content}
                    </motion.div>
                </AnimatePresence>
            </div>

        </motion.div>
    );
};
