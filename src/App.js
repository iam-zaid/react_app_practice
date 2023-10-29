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
import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=9f8644cc";

//9f8644cc

const App =() => {
    
    //Trying to use the API to get the data about
    useEffect(() => {
        searchMovies("Batman");
      }, []);
    
      const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
      }
    return(
        <h1>APP</h1>
        
    );
}

export default App;