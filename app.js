const express = require("express")
const app = express()
app.use(express.json())

let phrase = "none"

app.get("/", (req, res) => {
    res.send(phrase)
})
app.post("/", (req, res) => {
    phrase = req.body.xpath
    console.log(req.body.xpath);
    res.send("success")
})

app.listen(process.env.PORT, () => {
    console.log("listening")
})
