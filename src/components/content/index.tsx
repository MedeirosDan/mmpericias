import React from "react";
import Carousel from "../Carousel";
import Section from "./Section";
import PericiasList from "./PericiasList";
import { slides } from "./slidesData";
import { faChartLine, faHouse, faMagnifyingGlass, faScaleBalanced, faBuilding } from "@fortawesome/free-solid-svg-icons";
import Sobre from "./Sobre";
import styles from "./content.module.css";
import NossosNumeros from "./NossosNumeros";
import Parceiros from "./Parceiros";

export interface PericiaItem {
  icon: [string, string];
  title: string;
  description: string;
  link: string;
}

const Content = () => {
  const periciasItems = [
    {
      icon: faScaleBalanced,
      title: "Litígios entre empresas ou sócios",
      description: "Solução de disputas e cálculos financeiros.",
      link: "#"
    },
    {
      icon: faHouse,
      title: "Questões envolvendo heranças e partilhas de bens",
      description: "Análise contábil e divisão justa.",
      link: "#"
    },
    {
      icon: faMagnifyingGlass,
      title: "Análise de fraudes financeiras",
      description: "Identificação de irregularidades e fraudes.",
      link: "#"
    },
    {
      icon: faChartLine,
      title: "Ajustes fiscais e tributários",
      description: "Orientação sobre regularização fiscal.",
      link: "#"
    },
    {
      icon: faBuilding,
      title: "Cálculos trabalhistas",
      description: "Verificação de verbas rescisórias e horas extras.",
      link: "#"
    }
  ];

  return (
    <div className={`flex flex-col items-center`}>
      <Section title="Como um Contador Pode Te Ajudar: Perícias Contábeis">
        <p>A perícia contábil é uma ferramenta essencial para a resolução de disputas financeiras...</p>
        <h2 className="text-4xl font-bold text-center mt-4">O que é Perícia Contábil e como um contador pode ajudar?</h2>
        <PericiasList items={periciasItems} />
      </Section>
      <div className={`${styles.sobre} w-full mx-auto px-6 flex justify-center`}>
        <Sobre />
      </div>
      <div className={`${styles.clientsContainer} container`}>
        <h3 className={`mb-3 text-center`}>O Que <span>Nossos Clientes</span> Têm a Dizer</h3>
        <Carousel
          images={slides}
          imageHeight="300px"
          imageWidth="100%"
          objectFit="contain"
          visibleImages={1}
          className={`${styles.depoimentoContainerImage}`}
          gap="0px"
        />
      </div>
      <div className={`${styles.nossosNumeros} w-full mx-auto px-6 flex justify-center`}>
        <NossosNumeros />
      </div>
      <div className={`${styles.parceirosContainer} container`}>
        <Parceiros />
      </div>
    </div>
  );
};

export default Content;
