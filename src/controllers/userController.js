import userService from "../service/userService.js";
import User from "../models/User.js";

const userController = {
    selecionar: async (req, res) => {
        try{
            const resultado = await userService.recuperarUsuario();
            res.status(200).json({data: resultado, 
                msg:"Usuario recuperado"});
        }catch (error){
            res.status(500).json({msg: "Erros ao recuperar usuarios",
                data: error.message
            });
        }
    },
    criar: async (req, res) => {
        try{
            const {name, email, password} = req.body;

            const user = new User(name, email, password, null);

            const result = await userService.novoUsuario(user);

            return res.status(200).json({msg: "Usuario criado com sucesso"});

        }catch(error){
            res.status(500).json({msg: "Erros ao criar usuarios",
                data: error.message
                });
        }
    },
    deletar: async (req, res) => {
        try{
            const {id} = req.params;

            const result = await userService.deleteUsuario(id);

            return res.status(200).json({msg: "Usuario deletado com sucesso"});

        }catch(error){
            res.status(500).json({msg: "Erros ao deletar o usuarios",
                data: error.message
                });
        }
    }
}

export default userController;