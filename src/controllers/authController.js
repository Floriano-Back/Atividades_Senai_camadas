import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import userService from '../service/userService.js';

const authController = {
    login: async (req, res) => {
        try{
            const {email, password} = req.body;

            const userExixsts = await userService.recuperarUsuarioPorEmail(email);

            if(!userExixsts || userExixsts.length === 0){
                return res.status(400).json({msg: "Não existe esse usuario"})
            }

            const validPasword = await bcrypt.compare(password, userExixsts[0].password);

            if(!validPasword){
                return res.status(400).json({
                    msg: "Senha invalida"
                })
            }

            const acessToken = jwt.sign(
                {
                    id: userExixsts[0].id,
                    email: userExixsts[0].email,
                    name: userExixsts[0].name,
                    role: userExixsts[0].role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '15m'
                }
            )

            res.status(200).json({
                msg: "Login efetuado!",
                token: acessToken
            });

        }catch(error){
            console.error(error);
            return res.status(500).json({
                msg: "Ocorreu um erro no Servidor",
                errormenssage: error.menssage
            });
        }
    }
}

export default authController;