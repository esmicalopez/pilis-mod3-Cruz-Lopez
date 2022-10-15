import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LocationContext } from "../../context/LocationContext";
import "./LocationDisplay.css";

const LocationDisplay = () => {
  const { id } = useParams();
  const { locations } = useContext(LocationContext);
  const [location] = locations.filter(
    (location) => location.id === Number(id)
  );

  return (
    <div className="location-display-container">
      <div className="location-display-card">
        <h1 className="location-display-name">{location.name}</h1>
        <li>Latitud: {location.latitud}</li>
        <li>Longitud:{location.longitud}</li>
        <li>Temperatura :{location.temperature} C°</li>
        <li>Velocidad del viento : {location.windSpeed} km/h</li>
        
        <Link className="btn-back" to="/">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default LocationDisplay;
