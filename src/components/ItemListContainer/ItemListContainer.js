import "./ItemListContainer.css"

const ItemListContainer = ({titulo, subtitulo, pagos}) => {

    const articulos = [
      
    ]
    
    return(
        <div className="pagos">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <h3>{pagos}</h3>
        </div>

    )


}

export default ItemListContainer