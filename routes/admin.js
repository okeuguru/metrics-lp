const express = require("express")

const path = require("path")
const rootDir = require("../util/paths")

const router = express.Router()

router.get('/sign-up', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "sign-up.html"))
})

router.post('/sign-up', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router