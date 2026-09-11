import pool from "../configs/Database.js"

const userRepository = {
    selecionar: async () => {
        const sql = "SELECT * FROM users;";
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarId: async (userId) => {
        const sql = "SELECT * FROM users WHERE id = ?;";
        const [rows] = await pool.execute(sql, [userId]);
        return rows;
    },
    deletarId: async (userId) => {
        const sql = "DELETE FROM users WHERE id = ?;";
        const [rows] = await pool.execute(sql, [userId]);
        return rows;
    },
    criar: async (name,email,password, role) => {
        const sql = "INSERT INTO users VALUES (null, ?, ?, ?, ?);";
        const [rows] = await pool.execute(sql, [name,email,password,role]);
        return rows;
    },
    atualizar: async (name,email,password,role,userId) => {
        const sql = "UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?;";
        const [rows] = await pool.execute(sql, [name,email,password,role,userId]);
        return rows;
    },
    selecionarEmail: async (email) =>{
        const sql = "SELECT * FROM users WHERE email = ?;";
        const [rows] = await pool.execute(sql, [email]);
        return rows;
    }
}

export default userRepository;