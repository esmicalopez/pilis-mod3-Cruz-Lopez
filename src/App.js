
import './App.css';
import { Tarjetas, TarjetasN, TarjetasI } from './components/tarjetas/tarjetas';


function App() {
  return (
    <div className="App">
      <div>BUSCADOR</div>
      <div className='name-page'><h1>Nombre de la pagina</h1></div>
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
