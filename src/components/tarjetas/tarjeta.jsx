import {FiTrash2,FiXSquare} from "react-icons/fi"
//contiene los componenetes de cada TARJETA PROV.
export const Tarjeta = ({ name, latitud, longitud, temperatura, velocidad, eliminar}) => {
    return (
        <div className="card-container">
            <div className='card' style={{ backgroundColor: 'red' }}>
                <h3>Nombre: {name}</h3>
                <li>Latitud: {latitud}</li>
                <li>Longitud: {longitud}</li>
                <li>Temperatura: {temperatura}</li>
                <li>Vel. del Viento: {velocidad}</li>
            </div>
            <div className="icon-delete">
                { eliminar ? (
                    <FiXSquare className='delete' />
                ) : (
                    <FiTrash2 />
                )}
            </div>
        </div>

    );
}


//contiene los componenetes de cada TARJETA NACIONAL.
export const TarjetaN = ({ name, latitud, longitud, temperatura, velocidad, eliminar}) => {
    return (
        <div className="card-container">
            <div className='card' style={{ backgroundColor: 'red' }}>
                <h3>Nombre: {name}</h3>
                <li>Latitud: {latitud}</li>
                <li>Longitud: {longitud}</li>
                <li>Temperatura: {temperatura}</li>
                <li>Vel. del Viento: {velocidad}</li>
            </div>
            <div className="icon-delete">
                { eliminar ? (
                    <FiXSquare className='delete' />
                ) : (
                    <FiTrash2 />
                )}
            </div>
        </div>

    );
}

//contiene los componenetes de cada TARJETA Internacional.
export const TarjetaI = ({ name, latitud, longitud, temperatura, velocidad, eliminar}) => {
    return (
        <div className="card-container">
            <div className='card' style={{ backgroundColor: 'red' }}>
                <h3>Nombre: {name}</h3>
                <li>Latitud: {latitud}</li>
                <li>Longitud: {longitud}</li>
                <li>Temperatura: {temperatura}</li>
                <li>Vel. del Viento: {velocidad}</li>
            </div>
            <div className="icon-delete">
                { eliminar ? (
                    <FiXSquare className='delete' />
                ) : (
                    <FiTrash2 />
                )}
            </div>
        </div>

    );
}