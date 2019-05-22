const express = require("express");
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars');
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

function humanize(str) {
    str = str.toLowerCase();
    var frags = str.split(' ');

    for (i = 0; i < frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
}


app.get("/:name", (req, res) => {
    let name = req.params.name || "You";
    name = humanize(name);
    let date = new Date();
    let year = date.getFullYear();
    let age = 1 + date.getFullYear() - 1995;

    res.render("main", {
        name,
        year,
        age,
        layout: false,
        imagebg: `images/countdown-${getRandomArbitrary()}-1600x900.jpg`
    })
})
app.get("/", (req, res) => {
    let date = new Date();
    let year = date.getFullYear();
    let age = 1 + date.getFullYear() - 1995;
    res.render("main", {
        name: "There",
        year,
        age,
        layout: false,
        imagebg: `images/countdown-${getRandomArbitrary()}-1600x900.jpg`
    })
})

function getRandomArbitrary() {
    let num = Math.floor(Math.random() * 100) % 3;
    console.log(num)
    return num + 5;
}

