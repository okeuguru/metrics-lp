const path = require("path")
const rootDir = require("../util/paths")
const admindata = require('./admin')

const express = require("express")

const router = express.Router()

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "metrics-home.html"))
})

module.exports = router