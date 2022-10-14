//import { useContext } from "react";
import { FiXSquare } from "react-icons/fi"
//import { DeleteContext} from "./../../context/DeleteContext"
import './tarjeta.css'



//contiene los componenetes de cada TARJETA PROV.


export const Tarjeta = ({ id, name, latitud, longitud, temperatura, velocidad }) => {

    /* const {borrar, setDelete} = useContext(DeleteContext);
    
    const handleDelete = () => {
        const TarjetasFiltered = borrar.filter(
            (Tarjeta) => Tarjeta.id !== id
        );
        setDelete(TarjetasFiltered);
    } */
    function quitar(){
        document.getElementById("Tarjeta").remove(this)
            }
    

    return (
        <div className="card-container" key={id} id="Tarjeta">
            <div className="icon-delete" onClick= {quitar}>
                <FiXSquare />
            </div>
            <div className='card'>
                <h3>{name}</h3>
                <img src="./as" alt="aqui va una imagen"/>
                <li>Latitud: {latitud}</li>
                <li>Longitud: {longitud}</li>
                <li>Temperatura: {temperatura}</li>
                <li>Vel. del Viento: {velocidad}</li>
            </div>
        </div>
    );
}


export const TarjetaN = ({ id, name, latitud, longitud, temperatura, velocidad }) => {
    
    /* const {borrar, setDelete} = useContext(DeleteContext);
        
        const handleDelete = () => {
            const TarjetasFiltered = borrar.filter(
                (TarjetaN) => TarjetaN.id !== id
            );
            setDelete(TarjetasFiltered);
        }  */
    
    function quitar(){
            document.getElementById("TarjetaN").remove(this)
        }
        return (
            <div className="card-container" key={id} id="TarjetaN">
                { <div className="icon-delete" onClick= {quitar}>
                <FiXSquare />
                </div>}
                <div className='card'>
                    <h3>{name}</h3>
                    <img src="" alt="aqui va una imagen"/>
                    <li>Latitud: {latitud}</li>
                    <li>Longitud: {longitud}</li>
                    <li>Temperatura: {temperatura}</li>
                    <li>Vel. del Viento: {velocidad}</li>
                </div>
            </div>
        );
    }


    export const TarjetaI = ({ id, name, latitud, longitud, temperatura, velocidad }) => {

        /* const {borrar, setDelete} = useContext(DeleteContext);
        
        const handleDelete = () => {
            const TarjetasFiltered = borrar.filter(
                (TarjetaI) => TarjetaI.id !== id
            );
            setDelete(TarjetasFiltered);
        } */
        function quitar(){
            document.getElementById("TarjetaI").remove(this)
                }
            return (
                <div className="card-container" key={id} id="TarjetaI">
                    {<div className="icon-delete" onClick= {quitar}>
                    <FiXSquare />
                    </div>}
                    <div className='card'>
                        <h3>{name}</h3>
                        <img src="" alt="aqui va una imagen"/>
                        <li>Latitud: {latitud}</li>
                        <li>Longitud: {longitud}</li>
                        <li>Temperatura: {temperatura}</li>
                        <li>Vel. del Viento: {velocidad}</li>
                    </div>
                </div>
            );
        }