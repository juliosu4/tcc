const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 5000;
const db = new sqlite3.Database('database.db');

app.use(bodyParser.json());

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS lanches (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)");
});

app.post('/api/lanches', (req, res) => {
  const { nome } = req.body;
  
  if (!nome || nome.trim() === '') {
    return res.status(400).json({ error: 'O campo "nome" é obrigatório' });
  }
  
  db.run('INSERT INTO lanches (nome) VALUES (?)', [nome], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao adicionar o lanche', details: err.message });
    }
    
    res.status(201).json({ message: 'Lanche adicionado com sucesso!', id: this.lastID });
  });
});

app.get('/api/lanches', (req, res) => {
  db.all('SELECT * FROM lanches', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar lanches', details: err.message });
    }
    
    res.json({ lanches: rows });
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

// Encerrar a conexão com o banco de dados quando o servidor é desligado
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão com o banco de dados', err.message);
    } else {
      console.log('Conexão com o banco de dados fechada');
    }
    process.exit(0);
  });
});
