import "./Banner.css"




const titulo = "Amplia variedad de productos a un click de distancia"
const subtitulo = "AHORA 12 y AHORA 18"
const pagos = "Todos los medios de pago"



const Banner = () => {
    return (
        <div className="pagos">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <h3>{pagos}</h3>
        </div>

    )
}

export default Banner