import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./pericias.module.css";

interface PericiaItem {
  icon: IconProp;
  title: string;
  description: string;
  link: string;
}

interface PericiasListProps {
  items: PericiaItem[];
}

const PericiasList: React.FC<PericiasListProps> = ({ items }) => {
  return (
    <ul className={`${styles.list} mt-6 flex flex-row gap-5`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center flex-col">
          <div className={`${styles.icons} mb-2`}>
            <FontAwesomeIcon icon={item.icon} size="2x" />
          </div>
          <div className={`${styles.infos} mb-2`}>
            <h3>{item.title}</h3>
            <h4>{item.description}</h4>
          </div>
          <div className={`${styles.link} mb-2`}>
            <a href={item.link} className="link">Ver mais</a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PericiasList;
