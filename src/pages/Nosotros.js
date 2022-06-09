import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const Nosotros = () => {

    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() =>{
            setLoading(false)
        },3000);
    },[])
    const loader = () =>{
        return(
            <h1><Skeleton/></h1>
        )
    }

    if(loading){
        return(
            loader()
        )
    }
    else{

    return (

        <h1>Nosotros!!</h1>

    )}
}

export default Nosotros