"use client";

import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const IMAGES = [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=60"
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.imageWrapper}>
                <img
                    src={IMAGES[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={styles.image}
                />
                <div className={styles.indicators}>
                    {IMAGES.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
