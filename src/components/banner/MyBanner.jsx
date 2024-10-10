import React from 'react'; 
import './MyBanner.scss'; 

// Déclaration du composant Banner qui utilise des props
function Banner(props) {
  return (
    <div className='banner'>  {/* Élément principal du composant, avec une classe CSS 'banner' */}
      <p>{props.title}</p>  {/* Affiche le titre passé en props dans un élément <p> */}
      <img src={props.image} alt="banniere" /> {/* Affiche l'image avec la source et un texte alternatif */}
    </div>
  );
}

// Exportation du composant Banner pour qu'il soit disponible dans d'autres fichiers
export default Banner;
