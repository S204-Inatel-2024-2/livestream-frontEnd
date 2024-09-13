"use client"

import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './index.module.css';

const SeguindoVazio: NextPage = () => {
  const [seguindoList, setSeguindoList] = useState<string[]>([]); 
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/'); // Redireciona para a rota raiz
  };

  return (
    <div className={styles.seguindoVazio}>
      {/* Verifica se há elementos no array 'seguindoList' */}
      {seguindoList.length === 0 ? (
        // Renderiza mensagem quando não há elementos no array
        <div className={styles.message}>
          <img className={styles.icon} alt="" src="./../assets/icon.png" />
          <div className={styles.content}>
            <div className={styles.sigaSeusStreamers}>
              Siga seus streamers favoritos e eles vão aparecer aqui
            </div>
            <div className={styles.porEnquantoVoc}>
              Por enquanto você ainda não seguiu nenhum criador. Vá para o explorar e descubra streamers que você gosta!
            </div>
          </div>
        </div>
      ) : (
        // Renderiza imagem e título quando há elementos no array
        <div className={styles.caztv}>
          <img className={styles.streamIcon} alt="" src="stream.png" />
          <div className={styles.info}>
            <div className={styles.title}>
              JOGO COMPLETO: BAYER LEVERKUSEN X STUTTGART | SUPERCOPA DA ALEMANHA
            </div>
          </div>
        </div>
      )}

      <div className={styles.olDiegoParent}>
        <div className={styles.olDiego}>Olá, Diego</div>
        <div className={styles.header}>
          <div className={styles.tab}>
            <img className={styles.heartIcon} alt="" src="./../assets/Heart.svg" />
            <div className={styles.seguindo}>Seguindo</div>
          </div>
          <div className={styles.tab1} onClick={handleExploreClick}>
            <img className={styles.heartIcon} alt="" src="./../assets/Compass.png" />
            <div className={styles.explorar}>Explorar</div>
          </div>
        </div>
        <div className={styles.tab2}>
          <img className={styles.videocameraIcon} alt="" src="./../assets/VideoCamera.svg" />
          <div className={styles.seguindo}>Iniciar live</div>
        </div>
      </div>
    </div>
  );
};

export default SeguindoVazio;
