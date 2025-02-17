import React from "react";
import Carousel from "@/components/Carousel";
import styles from "./parceiros.module.css"

interface Parceiros {
    src: string;
    alt: string;
    className: string;
}

const Parceiros = () => {
    const parceiros: Parceiros[] = [
        { src: "/images/1.png", alt: "Logo do parceiro 1", className: "clients" },
        { src: "/images/2.png", alt: "Logo do parceiro 2", className: "clients" },
        { src: "/images/3.png", alt: "Logo do parceiro 3", className: "clients" },
        { src: "/images/4.png", alt: "Logo do parceiro 4", className: "clients" },
        { src: "/images/5.png", alt: "Logo do parceiro 5", className: "clients" },
        { src: "/images/6.png", alt: "Logo do parceiro 6", className: "clients" },
        { src: "/images/7.png", alt: "Logo do parceiro 7", className: "clients" },
        { src: "/images/8.png", alt: "Logo do parceiro 8", className: "clients" },
        { src: "/images/9.png", alt: "Logo do parceiro 9", className: "clients" },
        { src: "/images/10.png", alt: "Logo do parceiro 10", className: "clients" },
    ];

    return (
        <Carousel
            images={parceiros}
            imageHeight="77px"
            imageWidth="205px"
            objectFit="contain"
            visibleImages={5}
            gap="20px"
            className={`${styles.parceiroContainerImage}`}
        />
    );
};

export default Parceiros;
