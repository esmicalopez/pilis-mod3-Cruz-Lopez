import { BiShow, BiTrash } from "react-icons/bi";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import "./Location.css";
import { LocationContext } from "../context/LocationContext";

const Location = ({ location }) => {
  const { id, name, latitud, longitud, temperature, windSpeed} = location;
  const { locations, setLocations } = useContext(LocationContext);

  const handleDelete = () => {
    const locationsFiltered = locations.filter(
      (location) => location.id !== id
    );
    setLocations(locationsFiltered);
  };

  return (
    
    <div className="card-container" key={id}>
      <div className="location">
        <h3>{name}</h3>
        <li>Latitud: {latitud}</li>
        <li>Longitud: {longitud}</li>
        <li>Temperatura: {temperature} C°</li>
        <li>Velocidad del viento: {windSpeed} km/h</li>
      </div>
      <div className="location-actions">
      <div className="icon-delete" onClick={handleDelete}>
          <BiTrash />
      </div>
      <Link className="icon-show" to={`/location/${id}`}>
          <BiShow />
      </Link>
      
        
      </div>
    </div>
  );
};

export default Location;
