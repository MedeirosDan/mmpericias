"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Se rolar mais de 100px, fixa o menu
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full h-screen flex flex-col items-center">
            <div className="container mx-auto px-6 z-10">
                <div className={`${styles.headerTopBar} flex justify-between items-center py-3 text-white`}>
                    <div className={`${styles.headerTopBarContainerContato} flex gap-4`}>
                        <ul className={`${styles.headerTopBarRedeIcons} flex items-center gap-4`}>
                            <li>
                                <p>(00) 00000-0000</p>
                            </li>
                            <li className={`${styles.headerTopBarRedeIcon}`}>
                                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                            </li>
                            <li className={`${styles.headerTopBarRedeIcon}`}>
                                <FontAwesomeIcon icon={["fab", "instagram"]} />
                            </li>
                            <li className={`${styles.headerTopBarRedeIcon}`}>
                                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <p>Seg. - Sext. 9:00h - 18:00h</p>
                    </div>
                </div>

                {/* Menu */}
                <div className={`menu flex justify-between items-center bg-white shadow-md transition-all duration-300 ${isSticky ? "fixed top-0 left-0 w-full shadow-lg z-50" : "relative"
                    }
                ${isSticky ? styles.fadeindown : ""}`}>
                    <div className="text-xl font-bold py-4 px-6">LOGO</div>
                    <div className="px-6">
                        <ul className={`${styles.headerMenuContainer} flex gap-6`}>
                            <li><Link href="/" className={styles.headerMenuItems}>Home</Link></li>
                            <li><Link href="#" className={styles.headerMenuItems}>Sobre</Link></li>
                            <li><Link href="#" className={styles.headerMenuItems}>Área de atuação</Link></li>
                            <li><Link href="#" className={styles.headerMenuItems}>Contato</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${styles.headerFullBanner} absolute inset-0 -z-10`}>
                <Image
                    src="/images/3.jpg"
                    width={1866}
                    height={911}
                    alt="MMPericia"
                />
            </div>
        </div>
    );
};

export default Header;
