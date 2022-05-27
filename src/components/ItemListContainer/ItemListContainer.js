import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({ titulo, subtitulo, pagos }) => {

    return (

        <div>
            <div className="pagos">
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
                <h3>{pagos}</h3>
            </div>
            <div className="container cardContainer">
                <ItemList/>
            </div>

        </div>

    )


}

export default ItemListContainer