const express = require("express")
const app = express()
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
let phrase = "none"

app.get("/", (req, res) => {
    res.send(phrase)
})
app.post("/", (req, res) => {
    phrase = req.body
    console.log(req.body);
    res.send("success")
})

app.listen(process.env.PORT, () => {
    console.log("listening at ")
})
