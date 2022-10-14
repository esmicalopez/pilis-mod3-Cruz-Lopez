import { useContext, useId, useState } from "react";
import { FiTrash2, FiXSquare } from "react-icons/fi"
import { DeleteContext } from "../../context/DeleteContext";
import './tarjeta.css'



//contiene los componenetes de cada TARJETA PROV.


export const Tarjeta = ({ id, name, latitud, longitud, temperatura, velocidad }) => {
/* 
    const {borrar, setDelete} = useContext(DeleteContext);
    
    const handleDelete = () => {
        const TarjetasFiltered = borrar.filter(
            (Tarjeta) => Tarjeta.id === id
        );
        setDelete(TarjetasFiltered);
    } */

    function quitar(){
document.getElementById("tarjeta").remove(this)
    }

    return (
        <div className="card-container" key={id} id="tarjeta">
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
    /* 
        const {borrar, setDelete} = useContext(DeleteContext);
        
        const handleDelete = () => {
            const TarjetasFiltered = borrar.filter(
                (Tarjeta) => Tarjeta.id === id
            );
            setDelete(TarjetasFiltered);
        } */
    
        function quitar(){
    document.getElementById("tarjeta").remove(this)
        }
    
        return (
            <div className="card-container" key={id} id="tarjeta">
                <div className="icon-delete" onClick= {quitar}>
                <FiXSquare />
                </div>
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
        /* 
            const {borrar, setDelete} = useContext(DeleteContext);
            
            const handleDelete = () => {
                const TarjetasFiltered = borrar.filter(
                    (Tarjeta) => Tarjeta.id === id
                );
                setDelete(TarjetasFiltered);
            } */
        
            function quitar(){
        document.getElementById("tarjeta").remove(this)
            }
        
            return (
                <div className="card-container" key={id} id="tarjeta">
                    <div className="icon-delete" onClick= {quitar}>
                    <FiXSquare />
                    </div>
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