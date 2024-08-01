// Puedes usar estas librerias
// Comenta las lineaa 3 y 4 y descomenta las lineas 6 y 7 para utilziar nodemon en este archivo y regresa ambas como estaban para correr los tests
import axios from 'axios'
import fetch from 'node-fetch';

//const axios = require('axios') 
//const fetch =  require('node-fetch') ;


// APIs
const POKEAPI = 'https://pokeapi.co/api/v2/pokemon/'
const URLImages = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png'

// NO CAMBIES EL NOMBRE DE ESTA FUNCIÓN
// Comenta la linea 16 y descomenta la linea 15 para utilziar nodemon en este archivo y regresa ambas como estaban para correr los tests
//async function getPokemonList (){
export async function getPokemonList (){
    try {
      const newURLImages=URLImages.replace(/25.png/i,"")
      let response = await fetch(POKEAPI);
      let data = await response.json();
      let pokemonList = data.results.map((pokemon, index) => {
          let id = index + 1;
          return {
              name: pokemon.name,
              image: `${newURLImages}${id}.png`
          };
      });

      return pokemonList;
  } catch (error) {
      console.error('Error al obtener la lista de pokémones:', error);
  }
}


getPokemonList()
  .then(pokemonList => 
      console.log(pokemonList));

// Para hacer debug puedes colocar console.log() donde lo necesites y correr el test de este ejercicio