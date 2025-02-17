import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={`${styles.container} w-full flex flex-col items-center justify-center`}>
            <div className={`${styles.footerContatoContainer} container`}>
                <div className={`${styles.footerContato}`}>
                    <div className={`${styles.footerContatoCard}`}>
                        <div className={`${styles.footerContatoCardIcon}`}>
                            <FontAwesomeIcon icon={["fa", "fa-clock"]} />
                        </div>
                        <h4>
                            Segunda à Sábado <span>09:00 - 18:00</span>
                        </h4>
                    </div>
                    <div className={`${styles.footerContatoCard}`}>
                        <div className={`${styles.footerContatoCardIcon}`}>
                            <FontAwesomeIcon icon={["fa", "fa-envelope"]} />
                        </div>
                        <h4>
                            E-mail: <span>contato@contato.com.br</span>
                        </h4>
                    </div>
                    <div className={`${styles.footerContatoCard}`}>
                        <div className={`${styles.footerContatoCardIcon}`}>
                            <FontAwesomeIcon icon={["fa", "fa-phone"]} />
                        </div>
                        <h4>
                            LIGUE PARA NÓS: <span>(00) 0000-0000</span>
                        </h4>
                    </div>
                </div>
                <div className={`${styles.footerMenu}`}>
                    <div className={`${styles.footerMenuLogo}`}>
                        <h2>LOGOMM</h2>
                    </div>
                    <div className={`${styles.footerMenuBlog}`}>
                        <h2>Novos posts</h2>
                    </div>
                    <div className={`${styles.footerMenuLinks}`}>
                        <h2>Links</h2>
                        <ul>
                            <li>
                                <Link
                                    href="#"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                >
                                    Área de atuação
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.footerMenuNews}`}>
                        <h2>Newsletter</h2>
                    </div >
                </div>
            </div>
            <div className={`${styles.footerCopy} w-full flex items-center justify-center`}>
                <p>© 2025 - Todos os direitos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;