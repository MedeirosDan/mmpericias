import React from "react";
import styles from "./sobre.module.css";

const Sobre = () => {
    return (
        <div className={`${styles.sobre} w-full mx-auto px-6 flex justify-center`}>
            <div className={`${styles.sobre} container`}>
                <div className={`w-1/2`}>
                    <h1>Sobre Nós – Especialistas em <strong>Perícia Contábil</strong>.</h1>
                    <hr className={`${styles.small} border-t border-gray-300 w-full my-4`} />
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
    );
}

export default Sobre;