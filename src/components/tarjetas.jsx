//componente padre de tarjeta, contiene las tarjetas predeterminadas para mostrar en el HOME.

import './tarjetas.css'
import {Tarjeta, TarjetaN, TarjetaI} from "./tarjeta"

const CardList = [
    {
        id: 1,
        name: 'San Salvador de Jujuy',
        imag: 'https://cf.bstatic.com/images/hotel/840x460/317/317166470.jpg',
        Latitud: '-24.19457',
        Longitud: '-65.29712',
        Temperatura: '24°',
        VelocidadDelViento: '6 km/h',
        Delete: 'false'
    },
    {
        id: 2,
        name: 'San Pedro',
        imag: 'https://sanpedrodejujuy.gob.ar/wp-content/uploads/2020/07/IMG-20200724-WA0032.jpg',
        Latitud: '-24.2333',
        Longitud: '-64.8667 24',
        Temperatura: '29°',
        VelocidadDelViento: '10 km/h'  ,
        Delete: 'false'
    },
    {
        id: 3,
        name: 'Palpalá',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWQdtOZuSLAEFhE7yiwnktf9TYXSWSQByGQ&usqp=CAU',
        Latitud: '-24.25647',
        Longitud: '-65.21163',
        Temperatura: '23°',
        VelocidadDelViento: '5 km/h'  ,
        Delete: 'false'
    },
    {
        id: 4,
        name: 'Libertador Gral. San Martin',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdNMk93cbwGQWxZg6fXDT_MWrgWDcvucSp6zBmw0eYoHb7QjzfqSPmjBGRBR204xqnUY&usqp=CAU',
        Latitud: '-23.8',
        Longitud: '-64.7833',
        Temperatura: '28°',
        VelocidadDelViento: '7 km/h',
        Delete: 'false'
    },
]

export const Tarjetas = () =>{

    return (
        CardList.map (card =>
        <Tarjeta id= {card.id} name={card.name} imag={card.imag} latitud={card.Latitud} longitud={card.Longitud} temperatura={card.Temperatura} velocidad={card.VelocidadDelViento} eliminar={card.Delete} key={card.id}/>)
    )
}

const CardListN = [
    {
        id: 5,
        name: 'Jujuy',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bnqd-IbbipyZA23Cfg6NUYwjf5M69HRM5A&usqp=CAU',
        Latitud: '-24.19457',
        Longitud: '-65.29712',
        Temperatura: '28°',
        VelocidadDelViento: '6 km/h',
        Delete: 'false'
    },
    {
        id: 6,
        name: 'Cordoba',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AL7VH4aODy8L9mKyITY-rmmP1m5PLgREZQ&usqp=CAU',
        Latitud: '-31.417 ',
        Longitud: '-64.183',
        Temperatura: '20°',
        VelocidadDelViento: '4 km/h'  ,
        Delete: 'false'
    },
    {
        id: 7,
        name: 'Santa Fé',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFBU_ifGwdaMYtwrHXJeZYBD_ckJUKa-KMg&usqp=CAU',
        Latitud: '-31.64881',
        Longitud: '-60.70868',
        Temperatura: '19°',
        VelocidadDelViento: '15 km/h'  ,
        Delete: 'false'
    },
    {
        id: 8,
        name: 'Buenos Aires',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yiDYGeRiFgV0lJ3i7YqoYjcEBso4gef7aA&usqp=CAU',
        Latitud: '-34.61315',
        Longitud: '-58.37723',
        Temperatura: '33°',
        VelocidadDelViento: '18 km/h',
        Delete: 'false'
    },
]

export const TarjetasN = () =>{
    return (
        CardListN.map (card =>
        <TarjetaN id= {card.id} name={card.name} imag={card.imag} latitud={card.Latitud} longitud={card.Longitud} temperatura={card.Temperatura} velocidad={card.VelocidadDelViento} eliminar={card.Delete} key={card.id}/>)
    )
}

const CardListI = [
    {
        id: 9,
        name: 'Argentina',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-PmIlVBLwrswmP1BFFcnDlTa8SAIDgPg3w&usqp=CAU',
        Latitud: ' -38.416097',
        Longitud: '-63.616672',
        Temperatura: '29°',
        VelocidadDelViento: '20 km/h',
        Delete: 'false'
    },
    {
        id: 10,
        name: 'Estados Unidos',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsUS81DVk9K1xXobKEXsH6SXGw9zEfwUklQ&usqp=CAU',
        Latitud: '37.09024',
        Longitud: '-95.712891',
        Temperatura: '35°',
        VelocidadDelViento: '10 km/h'  ,
        Delete: 'false'
    },
    {
        id: 11,
        name: 'India',
        imag: 'https://www.elperiodista.cl/wp-content/uploads/2021/05/Corte-Suprema-India.jpg',
        Latitud: '20.593684',
        Longitud: '78.96288',
        Temperatura: '38°',
        VelocidadDelViento: '15 km/h'  ,
        Delete: 'false'
    },
    {
        id: 12,
        name: 'China',
        imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhWr6HvvotMCydi2ZT5GoRnR1TBpeZEBMcA&usqp=CAU',
        Latitud: '35.86166',
        Longitud: '104.195397',
        Temperatura: '20°',
        VelocidadDelViento: '8 km/h',
        Delete: 'false'
    },
]

export const TarjetasI = () =>{
    return (
        CardListI.map (card =>
        <TarjetaI id= {card.id} name={card.name} imag={card.imag} latitud={card.Latitud} longitud={card.Longitud} temperatura={card.Temperatura} velocidad={card.VelocidadDelViento} eliminar={card.Delete} key={card.id}/>)
    )
}
