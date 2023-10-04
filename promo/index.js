import './index.scss'

import logo from '../promo/img/logo.png'
import chedar1 from '../promo/img/chedar1.png'
import onion from '../promo/img/onion.png'
import file from '../promo/img/file.png'
import vegan from '../promo/img/vegan.png'


export default function () {

    return (

        <div className='maezovsk'>
            <div className='cabecalhasso'>
                <div className='logo1'>
                    <img src={logo} />
                </div>
                <h1>Conheça Nossas<span>PROMOÇÕES</span></h1>
            </div>
            <div className='promo'>
                <div className='primeiro'>
                    <div className='chedar1'>
                        <div className='sombra'>
                            <div className='ffora'>
                                <div className='teste'>
                                    <img src={chedar1} />
                                    <h1>R$ 37,90</h1>
                                </div>
                                <div className='fazer'>
                                    <h1><span>BIG CHEDDAR</span></h1>
                                    <h2>Pão especial,<br /> Bacon,Cheddar,<br /> Verduras</h2>
                                    <div className='azin'>
                                        <a>Fazer pedido </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='onion'>
                        <div className='sombra'>
                            <div className='ffora'>
                                <div className='teste'>
                                    <img src={onion} />
                                    <h1>R$ 34,90</h1>
                                </div>
                                <div className='fazer'>
                                    <h1><span>BIG ONION</span></h1>
                                    <h2>Pão especial, <br />Bacon, Cebola,<br /> chadder</h2>
                                    <div className='azin'>
                                        <a>Fazer pedido </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='segundo'>
                    <div className='file'>
                        <div className='sombra'>
                            <div className='ffora'>
                                <div className='teste'>
                                    <img src={file} />
                                    <h1>R$ 38,90</h1>
                                </div>
                                <div className='fazer'>
                                    <h1><span>FILÉ DUPLO</span></h1>
                                    <h2>Pão especial, <br /> Cebola, Maionese,<br />2 Carnes</h2>
                                    <div className='azin'>
                                        <a>Fazer Pedido </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='vegano'>
                        <div className='sombra'>
                            <div className='ffora'>
                                <div className='teste'>
                                    <img src={vegan} />
                                    <h1>R$ 33,90</h1>
                                </div>
                                <div className='fazer'>
                                    <h1><span>BIG VEGANO</span></h1>
                                    <h2>Carne Vegana, <br />Alface, Cebola,<br />Roxa, Picles</h2>
                                    <div className='azin'>
                                        <a>Fazer Pedido </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}