import 'react-loading-skeleton/dist/skeleton.css'
import './Nosotros.css';
import About from "../assets/nosotros.jpg"


const Nosotros = () => {



        return (
            <div className="row mx-0">
                <div className="col-lg-12 contenedor-nosotros" >
                    <div className="col-lg-12 p-3">
                        <h2 className="titulo">Sobre Nosotros</h2>

                    </div>
                    <div className="col-lg-6 left">
                        <img className="img-fluid mb-4" src={About} alt="Nosotros" />
                        <p>Pellentesque sit amet ligula faucibus dui mollis ultrices. Mauris ullamcorper nibh orci, eget rhoncus est hendrerit vitae. Ut tempor pharetra sagittis. Curabitur tempus tellus nisl, a facilisis orci dignissim et. Morbi elit mi, fringilla sit amet accumsan sed, pellentesque eget nunc. Pellentesque tincidunt non diam at luctus. Suspendisse quis metus pretium, accumsan ligula eget, faucibus ante. Suspendisse at consequat tortor. Ut sagittis volutpat nisl id iaculis. Praesent faucibus nunc a nisl porttitor fermentum. Nunc et lectus quis massa sagittis malesuada. Aliquam erat volutpat. Maecenas iaculis erat eu risus imperdiet semper id non urna. Nulla facilisi. Sed aliquam augue nunc, sed ullamcorper tellus fringilla in.</p>

                    </div>
                    <div className="col-lg-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu accumsan nisl. Nulla non orci eros. Mauris magna ipsum, fringilla non molestie eu, dapibus commodo massa. Vivamus dapibus cursus maximus. Nam dapibus sem vel bibendum consequat. Etiam porttitor hendrerit ex, at auctor nisi dictum non. Donec fringilla pulvinar eros, vitae rutrum est lobortis id. Vivamus fermentum, leo ac condimentum ullamcorper, lectus nisl accumsan metus, in hendrerit tellus magna sit amet quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis at pretium tortor, at molestie lacus. Cras arcu enim, finibus sit amet magna sodales, maximus elementum lacus. Aenean ultrices eros eu augue imperdiet convallis.</p>
                        <p>Aliquam semper ex at lacinia molestie. Aliquam in lorem id elit vestibulum bibendum in sed tortor. Aenean pretium gravida fermentum. Duis rhoncus sollicitudin posuere. Fusce id turpis lacus. Fusce pretium consectetur erat, in pharetra elit tempor at. Pellentesque quis lobortis neque. Nunc venenatis, eros eget fermentum vulputate, neque lectus faucibus lorem, quis volutpat dolor dui eu lectus. Duis eget metus velit. Vestibulum bibendum consequat nibh, efficitur placerat erat venenatis sit amet. Donec nec tincidunt arcu, vitae mollis ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                        <p>Aliquam id suscipit metus. In id porttitor libero, at sagittis nunc. Nunc et diam commodo magna cursus scelerisque sed aliquet velit. Duis malesuada aliquam feugiat. Cras gravida mi id elit tristique elementum vel sed nisi. Aenean at ipsum volutpat, iaculis libero varius, euismod dui. Proin maximus massa id lectus rhoncus consequat. Ut eu sollicitudin nisi, eu porta turpis. Quisque tempor nunc diam, at sagittis erat ornare feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tincidunt, eros hendrerit convallis finibus, erat risus cursus lacus, ac commodo nibh nunc a nisi.</p>
                    </div>

                </div>

            </div>

        )

}

export default Nosotros