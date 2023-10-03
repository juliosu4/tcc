import React, { useState } from 'react';
import './App.css';
import './font/www.burgerking.com.br.har'

import logo from './img/shutterstock_1751836019-scaled 3.png';
import logo2 from './img/megaburguer.png';
import logo3 from './img/xWhatsApp-Image-2020-09-18-at-15.06.53.jpeg.jpg.pagespeed.ic 3.png';
import logo4 from './img/logo1.png';
import logo5 from './img/a959c911498e200302c766a6a3b99445 2 (1).png';
import logo6 from './img/hamburguer-de-frango 3.png';
import remover from './img/emblemunreadable_93487.png'
import voltar from './img/back-arrow_icon-icons.com_54057.png'

function Item({ imagem, nome, onRemover, disponivel }) {


  
  return (
    <div className="item">
      <img src={imagem} alt={nome} />
      <h1>{nome}</h1>
      <button onClick={onRemover}>
      {}
      <img src={remover} alt="botao" />
      <span className="texto-botao"></span>
    </button>
      <p>{disponivel}</p>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([
    { nome: 'Super Bancon + Fritas', disponivel: 'Disponível', imagem: logo },
    { nome: 'Mega Cheddar', disponivel: 'Disponível', imagem: logo2 },
    { nome: 'Caramelizado', disponivel: 'Disponível', imagem: logo3 },
    { nome: 'Super Burguer', disponivel: 'Disponível', imagem: logo4 },
    { nome: 'Big Molho Branco', disponivel: 'Disponível', imagem: logo5 },
    { nome: 'Filé Chicken', disponivel: 'Disponível', imagem: logo6 },
  ]);

  const removerItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="app-container">
      <header className="cabecalho">
        <button className="botao-voltar">
        <img src={voltar} ></img>
        </button>
        <h1 className="titulo">Pedidos Disponíveis</h1>
      </header>
      <div className="items-container">
        {items.map((item, index) => (
          <Item
            key={index}
            nome={item.nome}
            disponivel={item.disponivel}
            imagem={item.imagem}
            onRemover={() => removerItem(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;