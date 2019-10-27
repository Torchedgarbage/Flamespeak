const express = require("express")
const app = express()
const port = 6969
const http = require("http").Server(app)
const io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.render("main.ejs")
})

const server = http.listen(port, () => {
    console.log(`owo we are online~! on port ${port} ^~^`)
})