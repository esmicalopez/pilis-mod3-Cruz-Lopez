//componente padre de tarjeta, contiene las tarjetas predeterminadas para mostrar en el HOME.

import './tarjetas.css'
import {Tarjeta, TarjetaN, TarjetaI} from "./tarjeta"

const CardList = [
    {
        id: 1,
        name: 'San Salvador de Jujuy',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: '',
        Delete: 'false'
    },
    {
        id: 2,
        name: 'San Pedro',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: ''  ,
        Delete: 'false'
    },
    {
        id: 3,
        name: 'Palpalá',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: ''  ,
        Delete: 'false'
    },
    {
        id: 4,
        name: 'Libertador Gral. San Martin',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: '',
        Delete: 'false'
    },
]

export const Tarjetas = () =>{

    return (
        CardList.map (card =>
        <Tarjeta id= {card.id} name={card.name} latitud={card.Latitud} longitud={card.Longitud} temperatura={card.Temperatura} velocidad={card.VelocidadDelViento} eliminar={card.Delete}/>)
    )
}

const CardListN = [
    {
        id: 1,
        name: 'San Salvador de Jujuy',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: '',
        Delete: 'false'
    },
    {
        id: 2,
        name: 'San Pedro',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: ''  ,
        Delete: 'false'
    },
    {
        id: 3,
        name: 'Palpalá',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: ''  ,
        Delete: 'false'
    },
    {
        id: 4,
        name: 'Libertador Gral. San Martin',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: '',
        Delete: 'false'
    },
]

export const TarjetasN = () =>{
    return (
        CardListN.map (card =>
        <TarjetaN name={card.name} latitud={card.Latitud} longitud={card.Longitud} temperatura={card.Temperatura} velocidad={card.VelocidadDelViento} eliminar={card.Delete}/>)
    )
}

const CardListI = [
    {
        id: 1,
        name: 'San Salvador de Jujuy',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: '',
        Delete: 'false'
    },
    {
        id: 2,
        name: 'San Pedro',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: ''  ,
        Delete: 'false'
    },
    {
        id: 3,
        name: 'Palpalá',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: ''  ,
        Delete: 'false'
    },
    {
        id: 4,
        name: 'Libertador Gral. San Martin',
        Latitud: '',
        Longitud: '',
        Temperatura: '',
        VelocidadDelViento: '',
        Delete: 'false'
    },
]

export const TarjetasI = () =>{
    return (
        CardListI.map (card =>
        <TarjetaI name={card.name} latitud={card.Latitud} longitud={card.Longitud} temperatura={card.Temperatura} velocidad={card.VelocidadDelViento} eliminar={card.Delete}/>)
    )
}
