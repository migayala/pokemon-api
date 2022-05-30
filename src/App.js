import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import "./App.css";

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
    setPokemon(response.data.results);
    })
    .catch((err) => console.log(err));
  }, []);

  return(
    <div className='App'>
    <h1>Axios Pokemon API Assignment</h1>
    <ul>
      {pokemon.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
    </div>
    
  )
}

export default App;