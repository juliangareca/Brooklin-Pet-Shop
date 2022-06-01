import img from "../assets/Brokling.jpeg"

const productos = [

    {
        producto: "Pelota",
        descripcion: "Gato",
        precio: "$1500",
        stock: 3,
        id: 1,
        img: img
    },
    {
        producto: "Hueso",
        descripcion: "Gato",
        precio: "$1200",
        stock: 12,
        id: 2,
        img: img
    },
    {
        producto: "Pelota 2",
        descripcion: "Perro",
        precio: "$2500",
        stock: 3,
        id: 3,
        img: img
    },
    {
        producto: "Hueso 2",
        descripcion: "Perro",
        precio: "$3500",
        stock: 30,
        id: 4,
        img: img
    },

]

const detalleProducto =   {
    producto: "Pelota",
    descripcion: "Gato",
    precio: "$1500",
    stock: 3,
    id: 1,
    img: img, 
    tipo: "SE BALANCEA CUANDO EL GATO LO MANOTEA, 100% nuevo y de alta calidad.El material ambiental y no tóxico es duradero y no hace daño a la mascota. Un juguete muy divertido y puede atraer la atención de su gato. No tóxico e inofensivo para las mascotas"
}

export default productos

export {detalleProducto}