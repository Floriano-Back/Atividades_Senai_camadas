import userRepository from "../repositories/userRepository.js";
import bcrypt from 'bcrypt';

const userService = {
    recuperarUsuario:  async () =>{
        const resultado = await userRepository.selecionar();
        return resultado;
    },
    recuperarUsuarioPorId: async (userId) =>{
        const resultado = await userRepository.selecionarId(userId);
        return resultado;
    },
    deleteUsuario: async (userId) =>{
        const resultado = await userRepository.deletarId(userId);
        return resultado;
    }, 
    novoUsuario: async (user) =>{
        const resultado = await userRepository.criar(user.name, user.email, user.password, user.role);
        return resultado;
    },
    atualizarUsuario: async (user) =>{        
        const resultado = await userRepository.atualizar(user.name, user.email, user.password, user.role, user.id);
        return resultado;
    },
    hashPassword: async (password) =>{
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword
    },
    recuperarUsuarioPorEmail: async (email) =>{
        const resultado = await userRepository.selecionarEmail(email);
        return resultado;
    }
};

export default userService;