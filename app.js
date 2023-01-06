const express = require("express")
const app = express()
app.use(express.json())
let phrase = "none"

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.send(phrase)
})
app.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    phrase = req.body.xpath
    console.log(req.body.xpath);
    res.send("success")
})

app.listen(process.env.PORT, () => {
    console.log("listening at ")
})
