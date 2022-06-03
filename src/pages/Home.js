import ItemListContainer from "../components/ItemListContainer/ItemListContainer"



const titulo = "Amplia variedad de productos a un click de distancia"
const subtitulo = "AHORA 12 y AHORA 18"
const pagos = "Todos los medios de pago"


const Home = () =>{

    return(
        <ItemListContainer titulo={titulo} subtitulo={subtitulo} pagos={pagos}/>
    )
}

export default Home