import { login } from '../repository/usuariorepository.js';
import { Router } from 'express';

const server = Router();

server.post('/usuario/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;  
        if (!email || !senha) {
            resp.status(400).json({ erro: "Email e senha são obrigatórios." });
            return;
        }

        const user = await login(email, senha);
        if (user) {
            resp.status(200).json({ mensagem: "Autenticação bem-sucedida", usuario: user });
        } else {
            resp.status(401).json({ erro: "Credenciais inválidas." });
        }
    } catch (err) {
        resp.status(500).json({ erro: "Erro interno do servidor." });
    }
});

export default server;