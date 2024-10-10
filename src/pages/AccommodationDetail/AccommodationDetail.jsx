import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Backend/informations.json';
import Collapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';
import Profile from '../../components/Profile/Profile';
import Tags from '../../components/Tags/Tags';
import Rating from '../../components/Rating/Rating';
import NotFound from '../NotFound/NotFound';
import './AccommodationDetail.scss';

const AccommodationDetail = () => {
  const { id } = useParams();
  //pour trouver l'id dans URL(frontend)
  const accommodation = data.find((item) => item.id === id); //resultat = item/element
 //id de l'lelement = id de l'URL
  if (!accommodation) {
    return <NotFound />;
  }
// ! le contraire
  const { title, location, description, host, rating, equipments, pictures, tags } = accommodation;
 

  return (
    <div className="accommodation-detail">
      <Gallery images={pictures} />

      <div className="accommodation-info">
        <div className="accommodation-title">
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="accommodation-tags">
            <Tags tags={tags} />
          </div>
        </div>
        <div className="accommodation-host-rating">
          <div className="accommodation-host">
            <Profile host={host} />
          </div>
          <div className="accommodation-rating">
            <Rating rating={rating} />
          </div>
        </div>
      </div>

      <div className="accommodation-collapse">
        <Collapse title="Description" text={description} />
        {equipments && <Collapse title="Équipements" text={equipments} isList />}
      </div>
    </div>
  );
};
// && si equipement existe 
export default AccommodationDetail;