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
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='location/:id' element={<LocationDisplay />} />
          <Route path='location/create' element={<LocationCreation />} />
        </Route>
      </Routes>
      <div className='name-page'><h1>PROMETEO</h1> <h6>Crea Tarjetas del Clima, GRATISS¡¡¡</h6></div>
      <div className='grid-card'>
        <h2 className='line'>Tarjetas Provinciales</h2>
        <div className='container'><Tarjetas /></div>
        <h2 className='line'>Tarjetas Nacionales</h2>
        <div className='container'><TarjetasN /></div>
        <h2 className='line'>Tarjetas Internacionales</h2>
        <div className='container'><TarjetasI /></div>
      </div>
    </div>
  );
}

export default App;