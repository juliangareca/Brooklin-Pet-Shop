import Card from "../Card/Card"
import "./ItemListContainer.css"

const ItemListContainer = ({titulo, subtitulo, pagos}) => {

    
    
    return(

        <div>
            <div className="pagos">
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
                <h3>{pagos}</h3>
            </div>
            <div className="container cardContainer">
                <Card producto={"Pelota"} descripcion={"Gato"} stock={5}/>
                <Card producto={"Hueso"} descripcion={"Gato"} stock={6}/>
                <Card producto={"Pelota 2"} descripcion={"Perro"} stock={11}/>
                <Card producto={"Hueso 2"} descripcion={"Perro"} stock={3}/>

            </div>
        </div>

    )


}

export default ItemListContainer