import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const movies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  //  qua si mette il genere che viene selezionato
  const [selectedGenre, setSelectedGenre] = useState("");

  //  film che vengono mostrati
  const [filteredMovies, setFilteredMovies] = useState(movies);


  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(
        (movie) => movie.genre === selectedGenre
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  return (
    <div>
      <h1>Lista Film</h1>


      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">Tutti</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>


      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
