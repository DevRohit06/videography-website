const express = require("express")
const app = new express()
app.set("view engine", "pug")
app.use(express.static(__dirname + "/public"))
app.get("/", (req, res) => {
    res.render("index", {
        title: "RAS PRODUCTION"
    })
})

const server = app.listen(5000, () => {
    console.log(`website is now running on port ${server.address().port}`)
})