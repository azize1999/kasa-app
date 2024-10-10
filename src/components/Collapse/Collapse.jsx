import React, { useState, useCallback } from 'react'; // Importation des dépendances React et des hooks nécessaires
import './Collapse.scss'; // Importation du fichier de styles SCSS pour le composant
import '@fortawesome/fontawesome-free/css/all.min.css';
// Déclaration du composant Collapse qui prend des props pour le titre et le texte
const Collapse = ({ title, text }) => {
  // État pour gérer l'ouverture/fermeture du collapsible
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture en utilisant useCallback pour optimiser les performances
  const toggleCollapse = useCallback(() => {
    setIsOpen(prevState => !prevState); // Inverse l'état actuel d'ouverture
  }, []); // La dépendance vide [] signifie que cette fonction ne change jamais

  // Vérifie si le texte est un tableau
  const isList = Array.isArray(text);

  return (
    <div className="collapse"> {/* Élément principal du composant avec une classe CSS 'collapse' */}
      <div className="collapse-header" onClick={toggleCollapse}> {/* En-tête qui gère le clic pour ouvrir/fermer */}
        <h3>{title}</h3> {/* Affiche le titre du collapsible passé en props */}
        {/* Affiche une icône en fonction de l'état d'ouverture : flèche vers le bas ou vers le haut */}
        <i className={`fa ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </div>
      {isOpen && ( // Vérifie si l'élément est ouvert
        <div className={`collapse-content ${isOpen ? 'show' : ''}`}> {/* Contenu qui s'affiche lorsque l'élément est ouvert */}
          {isList ? ( // Vérifie si le texte est une liste
            <ul> {/* Si c'est une liste, on crée une liste non ordonnée */}
              {text.map((item, index) => ( // Parcourt chaque élément de la liste
                <li key={index}>{item}</li> // Affiche chaque élément avec une clé unique (index utilisé ici)
              ))}
            </ul>
          ) : (
            <p>{text}</p> // Si ce n'est pas une liste, affiche le texte directement dans un paragraphe
          )}
        </div>
      )}
    </div>
  );
};

// Exporte le composant Collapse pour qu'il soit utilisable dans d'autres fichiers
export default Collapse;
