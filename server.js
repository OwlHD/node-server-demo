const express = require('express');
const pokemonData = require('./database.json')
const PORT = 5000;
const app = express();
app.get('/', (req,res) =>{
    console.log(pokemonData)
    res.send("Hello")
});

app.get('/all-pokemons', (req,res) =>{
    res.send(JSON.stringify(pokemonData))
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} successfully!`)
});