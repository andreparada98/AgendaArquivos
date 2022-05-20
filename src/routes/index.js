const express = require('express')
const userRoute = require('./user-route')


const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({title:"Home-Page"})
    })

    app.use(
        express.json(),
        userRoute

    )
}

module.exports = routes