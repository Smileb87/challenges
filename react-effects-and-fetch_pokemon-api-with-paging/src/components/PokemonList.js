import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [prevUrl, setPrevUrl] = useState("");

  const loadPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPokemon(nextUrl);
  }, []);  // empty array means this effect runs once after the initial render

  return (
    <main>
      {prevUrl && <button onClick={() => loadPokemon(prevUrl)}>Previous Page</button>}
      {nextUrl && <button onClick={() => loadPokemon(nextUrl)}>Next Page</button>}
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
