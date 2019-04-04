const express = require("express")

const path = require("path")
const rootDir = require("../util/paths")

const router = express.Router()

const users = []

router.get('/sign-up', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "sign-up.html"))
})

router.post('/sign-up', (req, res, next) => {
    users.push({ title: req.body.title })
    res.redirect('/')
})

module.exports = {
    routes: router,
    users: users
}