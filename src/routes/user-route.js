const middlewareAuth = require('./guards/middleware-auth')
const userController = require('../controllers/users-controller')
const express = require('express')

const router = express.Router()

router 
    .post("/usuario/login", middlewareAuth.local, userController.login)

    .get("/usuario", userController.listUser)



module.exports = router
