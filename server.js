const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    //res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Rodrigo',
    //     edad: 24,
    //     url: req.url
    // };

    // res.send(salida);

    res.render('home', {
        nombre: 'rodrigo vilella' //,
            //anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        //anio: new Date().getFullYear()
    });

});

// app.get('/data', (req, res) => {

//     res.send('Hola data');

// });

//app.listen(3000);

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});