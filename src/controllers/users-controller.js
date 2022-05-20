const User = require('../models/users.model')
const InvalidArgumentError = require('../../errors')

const jwt = require('jsonwebtoken')

function createTokenJWT(user) {         //Cria token
    const payload ={
        id: user.id
    }
    const token = jwt.sign(payload, process.env.KEY_JWT, {expiresIn: '15m'})
    return token
}

module.exports = {
    createUser: async (req,res) => {
        const email = req.body.email            //Armazena email do body em uma variavel.
        try {
            users.find({'email': email}, {}, (err, user) => {       //Procura no banco o Email.
                if(user === null){
                    res.status(500).send({message:`Já existe um usuário com esse email.`})      
              } else {                                                                         // Se não existir cadastra.
                  let newUser = new users(req.body);
                  newUser.name = req.body.name
                  newUser.email = req.body.email
                  newUser.password = req.body.password
                  newUser.setPassword(req.body.password)
                  newUser.save(() => { res.status(201).send(newUser.toJSON())})
                }
            })
        } catch (err) {
            if (err instanceof InvalidArgumentError) {
                res.status(422).json({ err: err.message });
            } else if (err instanceof InternalServerError) {
                res.status(500).json({ err: err.message });
            } else {
                res.status(500).json({ err: err.message });
            }
        }
    },

    listUser: async (req,res) => {
        User.find((err, users) => res.status(200).json(users))
    },

    login:  (req,res) => {
        try {
            const token = req.token;
            res.status(204).send()

        } catch (err) {
            res.status(500).json({err: err.message})
        }
    }

    
}