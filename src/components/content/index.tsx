import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./content.module.css";

const Content = () => {
    return (
        <div>
            <div className="container mx-auto pt-14 pb-14">
                <h1 className="text-4xl font-bold text-center mt-12">Como um Contador Pode Te Ajudar: Perícias Contábeis</h1>
                <p>A perícia contábil é uma ferramenta essencial para a resolução de disputas financeiras, análise de dados contábeis complexos e garantia da precisão de informações em processos judiciais ou extrajudiciais. Um contador especializado em perícias oferece suporte técnico fundamental para empresas, advogados e pessoas físicas que necessitam de uma análise detalhada e imparcial das finanças.</p>
                <h2 className="text-4xl font-bold text-center mt-12">O que é Perícia Contábil e como um contador pode ajudar?</h2>
                <p>A perícia contábil é realizada por um contador perito que avalia documentos, demonstrações financeiras e registros contábeis, gerando laudos e pareceres técnicos que podem ser decisivos em casos como:</p>
                <ul className={`${styles.periciasList} mt-6 flex flex-row gap-5`}>
                    <li className={`flex items-center flex-col`}>
                        <div className={`${styles.periciasIcons}`}>
                            <FontAwesomeIcon icon={["fa", "fa-scale-balanced"]} />
                        </div>
                        <div className={`${styles.periciasListText}`}>
                            <h3>
                                Litígios entre empresas ou sócios:
                            </h3>
                            <h4>
                                solução de disputas e cálculos financeiros.
                            </h4>
                        </div>
                        <div className={`${styles.periciasListLink}`}>
                            <a href="#">Ver mais</a>
                        </div>
                    </li>
                    <li className={`flex items-center flex-col`}>
                        <div className={`${styles.periciasIcons}`}>
                            <FontAwesomeIcon icon={["fa", "fa-house"]} />
                        </div>
                        <div className={`${styles.periciasListText}`}>
                            <h3>
                                Questões envolvendo heranças e partilhas de bens:
                            </h3>
                            <h4>
                                análise contábil e divisão justa.
                            </h4>
                        </div>
                        <div className={`${styles.periciasListLink}`}>
                            <a href="#">Ver mais</a>
                        </div>
                    </li>
                    <li className={`flex items-center flex-col`}>
                        <div className={`${styles.periciasIcons}`}>
                            <FontAwesomeIcon icon={["fa", "fa-magnifying-glass"]} />
                        </div>
                        <div className={`${styles.periciasListText}`}>
                            <h3>
                                Análise de fraudes financeiras:
                            </h3>
                            <h4>
                                identificação de irregularidades e fraudes.
                            </h4>
                        </div>
                        <div className={`${styles.periciasListLink}`}>
                            <a href="#">Ver mais</a>
                        </div>
                    </li>
                    <li className={`flex items-center flex-col`}>
                        <div className={`${styles.periciasIcons}`}>
                            <FontAwesomeIcon icon={["fa", "chart-line"]} />
                        </div>
                        <div className={`${styles.periciasListText}`}>
                            <h3>
                                Ajustes fiscais e tributários:
                            </h3>
                            <h4>
                                orientação sobre regularização fiscal.
                            </h4>
                        </div>
                        <div className={`${styles.periciasListLink}`}>
                            <a href="#">Ver mais</a>
                        </div>
                    </li>
                    <li className={`flex items-center flex-col`}>
                        <div className={`${styles.periciasIcons}`}>
                            <FontAwesomeIcon icon={["fa", "fa-building"]} />
                        </div>
                        <div className={`${styles.periciasListText}`}>
                            <h3>
                                Cálculos trabalhistas:
                            </h3>
                            <h4>
                                verificação de verbas rescisórias e horas extras.
                            </h4>
                        </div>
                        <div className={`${styles.periciasListLink}`}>
                            <a href="#">Ver mais</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`${styles.sobre} w-full mx-auto px-6 flex justify-center`}>
                <div className={`container`}>
                    <div className={`w-1/2`}>
                    <hr className={`${styles.small} border-t border-gray-300 w-full my-4`} />
                        <h1>Sobre Nós – Especialistas em <span>Perícia</span> Contábil.</h1>
                        <h2>Compromisso com a Excelência em Atendimento e Soluções Contábeis</h2>
                        <h3>Por que escolher nossos serviços?</h3>
                        <ul>
                            <li>Atendimento ágil e personalizado</li>
                            <li>Equipe altamente qualificada em perícia contábil e tributária</li>
                            <li>Análise detalhada para decisões financeiras estratégicas</li>
                            <li>Soluções eficientes para litígios financeiros, fraudes e ajustes fiscais</li>
                        </ul>
                        <h3>Nossa missão</h3>
                        <p>Nosso objetivo é fornecer suporte técnico de alta qualidade, garantindo que nossos clientes tomem decisões seguras e embasadas...</p>
                        <h3>Entre em contato</h3>
                        <p>Descubra como podemos ajudar você!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;