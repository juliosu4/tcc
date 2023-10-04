import './index.scss';
import logo from '../cadastro/img/logo.png';





export default function () {

    return (
        <div className="pag-inicial">

            <div className='cabecalho8'>
                <img src={logo}></img>
                <h1>THE RUNNERS BURGUERS</h1>

            </div>

            <div className='corpo0'>
                <h2>CRIAR CONTA</h2>
               
            </div>

            <div className='info'>
                <input className='senha' placeholder='EMAIL:' type='email'></input>
            </div>

            <div className='info2'>
                <input className='senha' placeholder='SENHA:' type='password'></input>
            </div>

            <div className='info3'>
                <input className='nome' placeholder='NOME:' type='text'></input>
            </div>

            <div className='info4'>
                <input className='sobrenome' placeholder='SOBRENOME' type='text'></input>
            </div>





        <div className='inputs'>


                <div className='info7'> 
                        <h1>PROSSEGUIR</h1>
                </div>



                <div className='info8'> 
                     <h1>FACEBOOK</h1>
                  </div>


                  <div className='info9'> 
                  <h1>GOOGLE</h1>
                    </div>



        </div>


    </div>





    );

}