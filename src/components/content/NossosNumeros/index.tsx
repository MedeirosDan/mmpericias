import React from "react";
import styles from "./nossosNumeros.module.css";

const NossosNumeros = () => {
    return (
        <div className={`container relative`}>
            <div className={`w-2/5 absolute right-0`}>
                <h1>A <strong>Perícia Contábil</strong> Mais Eficiente e Confiável</h1>
                <div className={`${styles.nossosNumerosContainer} flex`}>
                    <div className={`${styles.nossosNumerosBox}`}>
                        <h2>AVALIAÇÕES RÁPIDAS E PRECISAS</h2>
                        <hr className="small" />
                        <p>Com anos de experiência em perícia contábil, nossa equipe tem ajudado empresas e indivíduos a encontrar soluções precisas e eficazes para os desafios financeiros e tributários.</p> 
                        <p>Temos um histórico comprovado de sucesso, atendendo a diversos clientes e realizando inúmeras perícias contábeis. Nossa expertise e compromisso com a qualidade são garantias de que você terá o melhor serviço, sempre com resultados claros e confiáveis.</p>
                    </div>
                    <div className={`${styles.nossosNumerosBoxSmall} flex flex-col justify-start`}>
                        <div className={`${styles.nossosNumber}`}>
                            <h5>10</h5>
                            <h6>ANOS NO MERCADO</h6>
                        </div>
                        <div className={`${styles.nossosNumber}`}>
                            <h5>6,105</h5>
                            <h6>CLIENTES FELIZES</h6>
                        </div>
                        <div className={`${styles.nossosNumber}`}>
                            <h5>3,253</h5>
                            <h6>PROJETOS</h6>
                        </div>
                    </div >
                </div >
            </div >
    </div >
    );
}

export default NossosNumeros;