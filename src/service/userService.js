import userRepository from "../repositories/userRepository.js";

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
        const resultado = await userRepository.criar(user.name, user.email, user.password);
        return resultado;
    },
    atualizarUsuario: async (user) =>{
        const resultado = await userRepository.atualizar(user.name, user.email, user.password, user.id);
        return resultado;
    }
};

export default userService;