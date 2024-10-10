import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import AccommodationCard from '../../components/Card/AccommodationCard';
import data from '../../Backend/informations.json';
import BannerImage from "../../assets/image/accueil.png";
import Banner from '../../components/banner/MyBanner';
import './Home.scss';


const AccommodationList = ({ accommodations }) => {
  return (
    <div className="accommodation-list">
      {accommodations.map((accommodation) => (          //identification unique
        <Link to={`/accommodation/${accommodation.id}`} key={accommodation.id}> 
          <AccommodationCard accommodation={accommodation} />
        </Link>
      ))}
    </div>
  );
};

const Home = () => {
  const [accommodations] = useState(data); 

  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" image={BannerImage} />
      <AccommodationList accommodations={accommodations} />
    </>
  );
};

export default Home;
