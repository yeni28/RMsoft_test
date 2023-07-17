import '../styles/animation.module.css';
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const paragraphsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const paragraphs = paragraphsRef.current;
            const scrollPosition = window.scrollY + window.innerHeight;

            paragraphs.forEach((p, index) => {
                if (p && p.offsetTop < scrollPosition) {
                    p.classList.add('fadeIn');
                } else if (p) {
                    p.classList.remove('fadeIn');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="font-NanumNeo text-[4rem]">
                <p ref={el => (paragraphsRef.current[0] = el)} className={`paragraph ${isVisible ? 'fadeIn' : ''}`}>
                    빠르게 배우고
                </p>
                <p ref={el => (paragraphsRef.current[1] = el)} className={`paragraph ${isVisible ? 'fadeIn' : ''}`}>
                    효율적인 시각화를 위해 고민하는
                </p>

                <p className={`font-NanumNeoEB paragraph ${isVisible ? 'fadeIn' : ''}`} ref={el => (paragraphsRef.current[3] = el)}>
                    프론트엔드 개발자, 김예은 입니다.
                </p>
            </div>
        </div>
    );
}
