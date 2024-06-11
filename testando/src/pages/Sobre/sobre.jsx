import React from 'react';
import styles from './sobre.module.css';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Cabecalho from "../../components/paginaInicio/cabecalho";
import Rodape from "../../components/paginaInicio/rodape";


const Sobre = () => {
  const membros = [
    {
      nome: 'Gabriel Martins',
      descricao: 'HTML',
      imagem: '/Assets/gabriel.jpeg',
      github: 'https://github.com/Gabrielmartinsv'
    },
    {
      nome: 'Lucas Mello',
      descricao: 'HTML',
      imagem: '',
      github: 'https://github.com/lucassmelloo1'
    },
    {
      nome: 'Nicolas Barboza',
      descricao: 'CSS',
      imagem: './Nicolas.jpg',
      github: 'https://github.com/Nicolas645'
    },
    {
      nome: 'Juan Pedro',
      descricao: 'JS',
      imagem: './Juan.jpg',
      github: 'https://github.com/JuanP1982'
    },
    {
      nome: 'Leony Santos',
      descricao: 'CSS',
      imagem: './Leony.jpg',
      github: 'https://github.com/LeonyHenrique'
    }
  ];

  return (
    <section className={styles.section}>
        <Helmet>
        <title>Sobre</title>
      </Helmet>
        <Cabecalho />
      <h1 className={styles.h1S}>- SOBRE NÓS -</h1>
      <div className={styles.container}>
        {membros.map((membro, index) => (
          <div className={styles.content} key={index}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.image}>
                  <img src={membro.imagem} alt={membro.nome} />
                </div>
                <div className={styles.nomeDescricao}>
                  <span className={styles.nome}>{membro.nome}</span>
                  <span className={styles.descricao}>{membro.descricao}</span>
                </div>
                <div className={styles.mediaIcons}>
                  <a href={membro.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Rodape />
    </section>
  );
};

export default Sobre;
