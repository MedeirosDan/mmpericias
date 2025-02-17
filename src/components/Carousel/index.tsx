"use client";

import React, { useState } from "react";
import styles from "./carousel.module.css"

interface CarouselProps {
    images: {
        src: string;
        alt: string;
        className?: string;
        title?: string;
        description?: string;
    }[];
    showDots?: boolean;
    showArrows?: boolean;
    visibleImages?: number;
    imageHeight?: string;
    imageWidth?: string;
    objectFit?: "cover" | "contain";
    gap?: string;
    className?: string;
}

export default function Carousel({
    images,
    showDots = true,
    showArrows = true,
    visibleImages = 1,
    imageHeight = "300px",
    imageWidth = "100%",
    objectFit = "cover",
    gap = "0px",
    className = "",
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + visibleImages >= totalImages ? 0 : prevIndex + visibleImages
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - visibleImages < 0 ? totalImages - visibleImages : prevIndex - visibleImages
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${(currentIndex / totalImages) * 100}%)`,
                    width: "100%",
                    gap,
                }}
            >
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={`${className} flex-shrink-0 flex flex-col items-center justify-center`}
                        style={{
                            width: `calc(${100 / visibleImages}% - ${gap})`,
                        }}
                    >
                        <img
                            src={item.src}
                            className={`${item.className || ""}`}
                            style={{ height: imageHeight, width: imageWidth, objectFit }}
                            alt={item.alt}
                        />
                        {(item.title || item.description) && (
                            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-4 rounded-lg text-center w-3/4">
                                {item.title && <h3 className="text-lg font-semibold">{item.title}</h3>}
                                {item.description && <p className="text-sm">{item.description}</p>}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Dots de navegação */}
            {showDots && (
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {Array.from({ length: Math.ceil(totalImages / visibleImages) }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex / visibleImages === index ? "bg-blue-500" : "bg-gray-300"
                            }`}
                            onClick={() => setCurrentIndex(index * visibleImages)}
                        />
                    ))}
                </div>
            )}

            {/* Botões de navegação */}
            {showArrows && (
                <>
                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                        onClick={prevSlide}
                    >
                        ◀
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                        onClick={nextSlide}
                    >
                        ▶
                    </button>
                </>
            )}
        </div>
    );
}
