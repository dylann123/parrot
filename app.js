const express = require("express")
const app = express()
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
    console.log("listening at ")
})
