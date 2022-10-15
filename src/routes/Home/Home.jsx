import { useContext } from "react";
import "./Home.css";
import Locations from "../../components/Locations";
import { LocationContext } from "../../context/LocationContext";

const Home = () => {

  const { locations } = useContext(LocationContext);
  return (
    <div className="main-container">
      <h2>Tarjetas de Usuario</h2>
      <Locations locations={locations} />
    </div>
  );
};

export default Home;
