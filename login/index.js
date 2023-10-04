import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import './index.scss'



import logo from '../login/img/logo.png';





export default function() {
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

    async function entrarclick() {
        try {
            const r = await axios.post('http://localhost:5000/usuario/login', {
                email: email,
                senha: senha
            });
    
            if (r.status === 401) {
                setErro("Credenciais inválidas.");
            } else if (r.status === 200) {
                navigate('/');
            }
        } catch (error) {
            console.error('Erro:', error);
            setErro("Credenciais inválidas .");
        }
    }
    
      return (
        <div className='secao01' >
    
          <div className='cabecalho'>
            <img src={logo} />
            <h1>THE RUNNER BURGUERS</h1>
          </div>
    
          <div className='corpo'>
            <h1>ADMINISTRADOR</h1>           
              <input
              type="text"
              placeholder ="Digite seu e-mail"
              value={email}
              onChange={ e => setEmail (e.target.value)} 
              />
    
              <input
              type="password"
              placeholder="Senha:"
              value={senha}
              onChange={e => setsenha (e.target.value)}
              />
            <a href=''>Esqueci minha senha</a>

            <div className='entrar-invalido'>
                          {erro}
                    </div>
            <button onClick={entrarclick}>PROSSEGUIR</button>

          </div>    
        </div>
      )
    }