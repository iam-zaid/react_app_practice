/*
import React from "react";

const App =() => {
    return(
        <h1>APP</h1>
    );
}

export default App;
this is the basic structure of every react file structure. Thius is the bare minimum needed to start on a project.
*/

import React from "react";
import { useEffect,useState } from "react";
import './App.css'; // importing he styling from css file
import searchIcon from './search.svg';      //importing the search Icon from Search File
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=9f8644cc";

const movieTry ={
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

//9f8644cc

const App =() => {
    
    const [searchTerm, setSearchTerm] = useState("");   // to store/update the searched value
    const [movies, setMovies] = useState([]);   // to store the data of the movie coming from API
    //Trying to use the API to get the data about
    // useEffect(() => {
    //     searchMovies("Batman");
    //   }, []);
    
      const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data);
      }
    return(
        //wrapping everything (code logic and page appearance) inside this dev. 
        <div className = "app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} //this will help to get the entered value based on a event
                />

                <img
                src={searchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)} // this click will call the API
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container"> 
                    {movies.map((movie) => (<MovieCard movie={movie} />))}
                </div>
            ) : 
            (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}

            
        </div>
        
        
    );
}

export default App;