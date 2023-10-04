import './index.scss'
import React, { useState } from 'react';

import logo from '../promounico/img/logo.png'
import carrinho from '../promounico/img/carrinho.png'
import ham from '../promounico/img/ham.png'
import master from '../promounico/img/master.png'
import pix from '../promounico/img/pix.png'
import visa from '../promounico/img/visa.png'
import elo from '../promounico/img/elo.png'


export default function ProdutoPage() {
    const [quantidade, setQuantidade] = useState(1);
  
    function diminuirQuantidade() {
      if (quantidade > 1) {
        setQuantidade(quantidade - 1);
      }
    }
  
    function aumentarQuantidade() {
      setQuantidade(quantidade + 1);
    }
  
    return (
      <div className='maezona'>
        <div className='color'>
          <div className='cabecalhoo'>
          <div>
                    <img src={logo} />

                </div>

                <a><strong><span>SOBRE NÓS</span></strong></a>
                <a><strong><span>HOME</span></strong></a>
                <a><strong><span>CARDÁPIO</span></strong></a>
                <a><strong><span>COMBOS</span></strong></a>
                <a><strong><span>PROMOÇÕES DA SEMANA</span></strong></a>

                <div className='carrinho'>
                        <button  >
                            <img src={carrinho} />
                        </button>
                    </div>
                    
          </div>

  
          <div className='promo12'>
            <img src={ham} alt='Hamburguer' />
            <div className='textos'>
              <h1><span> Hamburguer Clássico 70 (Tipo x -salada)</span></h1><br />
              <h2>Cheese salada, burger bovino de 160g ao ponto, queijo cheddar , maionese de ervas, alface, tomate, cebola roxa, picles no pão de brioche artesanal.
                (Obs: Nosso hamburguer contém derivados de porco.)</h2>
              <p className='word'>Coca-350ml. +R$7,90 <input type='checkbox' /></p>
              <p>  Batata-frita-individual +R$13,90 <input type='checkbox' /></p>
              <h1><span>Total:</span> <span id="precoTotal">{(quantidade * 54.7).toFixed(2)}</span></h1>
            </div>
          </div>
  
          <div className='butoess'>
            <h1>Quantidade</h1>
            <button className='branco'>
              <button className='menos' onClick={diminuirQuantidade}>-</button>
              <input type="text" id="quantidade" value={quantidade} readOnly />
              <button className='mais' onClick={aumentarQuantidade}>+</button>
            </button>
            <button>Comprar</button>
            <h1 className='amanho'>Frete grátis a partir de R$49,99</h1>
            <div className='pagamentos'>
                <img src={ master} />
            </div>
          </div>
        </div>
      </div>
    );
  }