import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import LocationCreation from './routes/Location/LocationCreation';
import LocationDisplay from './routes/Location/LocationDisplay';
import { Tarjetas, TarjetasN, TarjetasI } from './components/tarjetas';



//import Tarjetas from "./routes/Tarjetas";

function App() {

  return (
    <div className='App'>
      <div className='name-page'>PRO-METEO</div>
      <div> BUSCADOR </div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='location/:id' element={<LocationDisplay />} />
          <Route path='location/create' element={<LocationCreation />} />
        </Route>
      </Routes>
      <div className='grid-card'>
        <h2>Tarjetas Provinciales</h2><br />
        <div className='container'><Tarjetas /></div>
        <h2>Tarjetas Nacionales</h2>
        <div className='container'><TarjetasN /></div>
        <h2>Tarjetas Internacionales</h2>
        <div className='container'><TarjetasI /></div>
      </div>
    </div>
  );
}

export default App;