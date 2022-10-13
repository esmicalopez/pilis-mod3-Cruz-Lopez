
import './App.css';
import {Tarjetas, TarjetasN, TarjetasI} from './components/tarjetas/tarjetas';


function App() {
  return (
    <div className="App">
      <div className='grid'>
      Tarjetas Provinciales
        <Tarjetas/>
      Tarjetas Nacionales
      <TarjetasN/>
      Tarjetas Internacionales
      <TarjetasI/>
      </div>
      
    </div>
  );
}

export default App;
