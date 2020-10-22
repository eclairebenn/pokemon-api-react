import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState(null);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        console.log(clicked);
        if(!clicked){
            return;
        }
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=805')
            .then(response => {setPokemons(response.data)})
    }, [clicked]);
    return (
        <div>
            <button disabled={clicked}  onClick={(e) => setClicked(!clicked)}>Fetch Pokemon</button>
            {
                pokemons && (pokemons.results).map((poke, index) => {
                return (<div key={index}>{poke.name}</div>)
                })
            }
        </div>
    )
}

export default Pokemon;