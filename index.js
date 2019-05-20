const express = require("express");
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');
const app = express()
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
app.use(express.static('./public'))
app.listen(process.env.port || process.env.PORT || 3000, () => {
    console.log("Ok")
});

app.get("/:name", (req, res) => {
    let name = req.params.name||"You";
    res.render("main",{name,layout:false,imagebg:`images/countdown-${getRandomArbitrary()}-1600x900.jpg`})
})
app.get("/", (req, res) => {
    res.render("main",{name:"there",layout:false,imagebg:`images/countdown-${getRandomArbitrary()}-1600x900.jpg`})
})
function getRandomArbitrary() {
    let num= Math.floor(Math.random()*100)%3;
    console.log(num)
    return num+5;
}

