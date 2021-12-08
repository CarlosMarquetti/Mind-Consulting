const Usuarios = require('../models/usuarios.model');

module.exports = {
    index(req,res){
        res.json({message:'Hello Wold from controller Usuário'});
    },
    async create(req,res){
        const {nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body

        let data = {};

        let user = Usuario.findOne({'email_usuario':email_usuario});
        console.log(user);
        return res.status(200).json(user);
        
        // if(!user){
        //     data = {nome_usuario, email_usuario, tipo_usuario, senha_usuario};
            
        //     user = await Usuario.create(data);
        //     return res.status(200).json(user);
        // }else{
        //     return res.status(500).json(user);
        // }
    }    
}