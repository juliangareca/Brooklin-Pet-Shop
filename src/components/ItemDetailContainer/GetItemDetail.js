



const GetItemDetail = () =>{

    const {id} = useParams()
    const [detalle, setDetalle] = useState([])

    useEffect(() => {


        const getItem = () => {
            return new Promise((resolve) => {
                    resolve(detalleProducto)
            })
        }


        getItem().then((res) => {
            setDetalle(res)
            setDetalle(productosFilter)
        })
               
    }, []);

    const productosFilter =  productos.find( (producto) =>{
        return producto.id == id
    })
   
}


export default GetItemDetail