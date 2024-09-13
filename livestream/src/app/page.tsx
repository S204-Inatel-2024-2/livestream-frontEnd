"use client";

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';


const ExplorarCaztv = () => {
	const router = useRouter();
  	
  	const onButtonContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);

	  const handleSeguindoClick = useCallback(() => {
		router.push('/following');  // Redireciona para a rota /following
	  }, [router]);
  	
  	return (
    		<div className={styles.explorarCaztv}>
      			<img className={styles.blurIcon} alt="" src="blur.png" />
      			<div className={styles.tioorochi}>
        				<div className={styles.stream}>
          					<div className={styles.controls}>
            						<div className={styles.left}>
              							<div className={styles.control}>
                								<img className={styles.playIcon} alt="" src="Play.svg" />
              							</div>
              							<div className={styles.control}>
                								<img className={styles.playIcon} alt="" src="SpeakerSimpleHigh.svg" />
              							</div>
            						</div>
            						<div className={styles.control}>
              							<img className={styles.playIcon} alt="" src="ArrowsOutSimple.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.info}>
          					<div className={styles.title}>live do mitinho (eu sou o mitinho)</div>
          					<div className={styles.line} />
          					<div className={styles.about}>
            						<div className={styles.channel}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<b className={styles.tioorochinho}>tioorochinho</b>
              							<b className={styles.b}>•</b>
              							<div className={styles.watching}>
                								<img className={styles.userIcon} alt="" src="User.svg" />
                								<div className={styles.kAssistindo}>2k  assistindo</div>
              							</div>
            						</div>
            						<div className={styles.actions}>
              							<div className={styles.button}>
                								<img className={styles.userIcon} alt="" src="./assets/Heart.svg" />
                								<div className={styles.seguir}>Seguir</div>
              							</div>
              							<div className={styles.button1}>
                								<img className={styles.userIcon} alt="" src="PaperPlaneTilt.svg" />
                								<div className={styles.compartilhar}>Compartilhar</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.caztv}>
        				<div className={styles.stream1}>
          					<div className={styles.controls}>
            						<div className={styles.left}>
              							<div className={styles.control}>
                								<img className={styles.playIcon} alt="" src="Play.svg" />
              							</div>
              							<div className={styles.control}>
                								<img className={styles.playIcon} alt="" src="SpeakerSimpleHigh.svg" />
              							</div>
            						</div>
            						<div className={styles.control}>
              							<img className={styles.playIcon} alt="" src="ArrowsOutSimple.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.info1}>
          					<div className={styles.title}>JOGO COMPLETO: BAYER LEVERKUSEN X STUTTGART | SUPERCOPA DA ALEMANHA</div>
          					<div className={styles.line} />
          					<div className={styles.about}>
            						<div className={styles.channel}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<b className={styles.tioorochinho}>Cazé TV</b>
              							<b className={styles.b}>•</b>
              							<div className={styles.watching}>
                								<img className={styles.userIcon} alt="" src="User.svg" />
                								<div className={styles.kAssistindo}>10k  assistindo</div>
              							</div>
            						</div>
            						<div className={styles.actions}>
              							<div className={styles.button2} onClick={onButtonContainerClick}>
                								<img className={styles.userIcon} alt="" src="Heart.svg" />
                								<div className={styles.seguir}>Seguir</div>
              							</div>
              							<div className={styles.button1}>
                								<img className={styles.userIcon} alt="" src="PaperPlaneTilt.svg" />
                								<div className={styles.compartilhar}>Compartilhar</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.alanzoka}>
        				<div className={styles.stream}>
          					<div className={styles.controls}>
            						<div className={styles.left}>
              							<div className={styles.control}>
                								<img className={styles.playIcon} alt="" src="Play.svg" />
              							</div>
              							<div className={styles.control}>
                								<img className={styles.playIcon} alt="" src="SpeakerSimpleHigh.svg" />
              							</div>
            						</div>
            						<div className={styles.control}>
              							<img className={styles.playIcon} alt="" src="ArrowsOutSimple.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.info}>
          					<div className={styles.title}>hoje acho que nao tem nada novo nem velho pq tem wukong amanha, mas tem jogo...</div>
          					<div className={styles.line} />
          					<div className={styles.about}>
            						<div className={styles.channel}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<b className={styles.tioorochinho}>alanzoka</b>
              							<b className={styles.b}>•</b>
              							<div className={styles.watching}>
                								<img className={styles.userIcon} alt="" src="User.svg" />
                								<div className={styles.kAssistindo}>25k  assistindo</div>
              							</div>
            						</div>
            						<div className={styles.actions}>
              							<div className={styles.button}>
                								<img className={styles.userIcon} alt="" src="Heart.svg" />
                								<div className={styles.seguir}>Seguir</div>
              							</div>
              							<div className={styles.button1}>
                								<img className={styles.userIcon} alt="" src="PaperPlaneTilt.svg" />
                								<div className={styles.compartilhar}>Compartilhar</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.next} onClick={onButtonContainerClick}>
        				<img className={styles.arrowrightIcon} alt="" src="ArrowRight.svg" />
      			</div>
      			<div className={styles.before}>
        				<img className={styles.arrowrightIcon1} alt="" src="ArrowRight.svg" />
      			</div>
      			<div className={styles.olDiegoParent}>
        				<div className={styles.compartilhar}>Olá, Diego</div>
        				<div className={styles.header}>
          					<div className={styles.tab} onClick={handleSeguindoClick}>
            						<img className={styles.playIcon} alt="" src="Heart.svg" />
            						<div className={styles.compartilhar}>Seguindo</div>
          					</div>
          					<div className={styles.tab1}>
            						<img className={styles.playIcon} alt="" src="./assets/Compass_blue.png" />
            						<div className={styles.seguir}>Explorar</div>
          					</div>
        				</div>
        				<div className={styles.tab2}>
          					<img className={styles.videocameraIcon} alt="" src="VideoCamera.svg" />
          					<div className={styles.seguir}>Iniciar live</div>
        				</div>
      			</div>
    		</div>);
};

export default ExplorarCaztv;
