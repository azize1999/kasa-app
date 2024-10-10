import React from 'react'; 
import Collapse from '../../components/Collapse/Collapse'; // Importation du composant Collapse
import './Apropos.scss'; 
import Banner from '../../components/banner/MyBanner'; // Importation du composant Banner (bannière)
import BannerImage from '../../assets/image/about.png'; // Importation de l'image pour la bannière
import aboutInfo from '../../Backend/about.json'; // Importation des données au format JSON qui contient des informations sur "À propos"

const Apropos = () => ( // Déclaration d'une fonction de composant fonctionnel appelée Apropos
  <>
    {/* Composant Banner qui affiche une image sans titre */}
    <Banner title="" image={BannerImage} />
    
    {/* Section principale contenant la liste des éléments "à propos" */}
    <div className="about">
      {/* Boucle sur les données JSON aboutData et crée un composant Collapse pour chaque élément */}
      {aboutInfo.map((info, index) => (
        <Collapse key={index} title={info.title} text={info.description} />
      ))}
    </div>
  </>
);

export default Apropos; // Exportation du composant Apropos pour l'utiliser dans d'autres parties de l'application
