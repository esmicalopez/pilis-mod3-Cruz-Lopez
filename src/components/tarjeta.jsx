import { FiXSquare } from "react-icons/fi"
import './tarjeta.css'


export const Tarjeta = ({ id, name, imag, latitud, longitud, temperatura, velocidad }) => {

    function quitar(){
        document.getElementById("tarjeta").remove()
            }
    

    return (
        <div className="card-container" id="tarjeta">
            <div className="icon-delete1" onClick= {quitar}>
                <FiXSquare />
            </div>
            <div className='card'>
                <h3>{name}</h3>
                <img className="imgs" src={imag} alt="aqui va una imagen"/>
                <li>Latitud: {latitud}</li>
                <li>Longitud: {longitud}</li>
                <li>Temperatura: {temperatura}</li>
                <li>Vel. del Viento: {velocidad}</li>
            </div>
        </div>
    );
}


export const TarjetaN = ({ id, name,imag, latitud, longitud, temperatura, velocidad }) => {
    
    function quitar(){
            document.getElementById("TarjetaN").remove(this)
        }
        return (
            <div className="card-container" id="TarjetaN">
                { <div className="icon-delete1" onClick= {quitar}>
                <FiXSquare />
                </div>}
                <div className='card'>
                    <h3>{name}</h3>
                    <img className="imgs" src={imag} alt="aqui va una imagen"/>
                    <li>Latitud: {latitud}</li>
                    <li>Longitud: {longitud}</li>
                    <li>Temperatura: {temperatura}</li>
                    <li>Vel. del Viento: {velocidad}</li>
                </div>
            </div>
        );
    }


    export const TarjetaI = ({ id, name,imag, latitud, longitud, temperatura, velocidad }) => {

        function quitar(){
            document.getElementById("TarjetaI").remove(this)
                }
            return (
                <div className="card-container" id="TarjetaI">
                    {<div className="icon-delete1" onClick= {quitar}>
                    <FiXSquare />
                    </div>}
                    <div className='card'>
                        <h3>{name}</h3>
                        <img className="imgs" src={imag} alt="aqui va una imagen"/>
                        <li>Latitud: {latitud}</li>
                        <li>Longitud: {longitud}</li>
                        <li>Temperatura: {temperatura}</li>
                        <li>Vel. del Viento: {velocidad}</li>
                    </div>
                </div>
            );
        }