import {con} from './conection.js'


export async function login(email, senha) {
    const comando = `
        SELECT NM_USUARIO, DS_EMAIL
        FROM TB_USUARIO
        WHERE DS_EMAIL = ? AND DS_SENHA = ?
    `;

    try {
        const [rows] = await con.query(comando, [email, senha]);

        if (rows.length > 0) {
            return rows[0];
        } else {
            return null; 
        }
    } catch (err) {
        throw new Error("Erro ao realizar o login: " + err.message);
    }
}
