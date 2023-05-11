require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');

const app = express();
const port = 3000 

const pokemon = require('./models/pokemon.js');

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', function(req, res){
    res.send(`<h1><a href='/pokemon'>Welcome to the Pokemon App!</a></h1>`);
});   

app.get('/pokemon', (req, res)=>{
    pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        });
    });
});

app.get('/pokemon/new', (req, res)=>{
    res.render('New');
});

app.post('/pokemon/', (req, res)=>{
    pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect('/pokemon');
    });
});

app.get('/pokemon/:id', (req, res)=>{
    pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {
            pokemon:foundPokemon
        });
    });
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});