import './Footer.css';
import banner from "../../assets/gatosyperros.jpg"



const Footer = () => {

    return (
        <div>
            <img src={banner} className="img" alt='Banner de Gatos y Perros'/>
            <footer className="bg-light text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">

                        <a
                            className="btn btn-primary btn-floating m-1 face"
                            href="https://www.facebook.com/jugakan/"
                            role="button"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>


     


                        <a
                            className="btn btn-primary btn-floating m-1 mail"
                            href="gmail.com/jugakan"
                            role="button"
                        ><i className="bi bi-envelope"></i></a>


                        <a
                            className="btn btn-primary btn-floating m-1"
                            href="https://www.instagram.com/julian.gareca/"
                            role="button"
                        ><i className="bi bi-instagram"></i></a>


                        <a
                            className="btn btn-primary btn-floating m-1"
                            href="https://www.linkedin.com/in/julian-gareca-kandrachoff-a800611b9/"
                            role="button"
                        ><i className="bi bi-linkedin"></i></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            href="https://github.com/juliangareca"
                            role="button"
                        ><i className="bi bi-github"></i></a>
                    </section>
                </div>

                <div className="text-center p-3 copy">
                    © 2022 Copyright: Julian Gareca Kandrachoff
                </div>
            </footer>
        </div>
    )
}


export default Footer