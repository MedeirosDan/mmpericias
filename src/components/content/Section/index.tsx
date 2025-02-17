import React, { ReactNode } from "react";
import styles from "./../content.module.css"

interface SectionProps {
    title?: string;
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <div className={`${styles.ajudarContainer} container mx-auto pt-14 pb-14 flex flex-col items-center gap-5`}>
            {title && <h1 className={`text-4xl font-bold text-center`}>{title}</h1>}
            {children}
        </div>
    );
};

export default Section;
