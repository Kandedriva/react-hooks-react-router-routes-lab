import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
  <h1>Movies Page</h1>

  {movies.map((movie, index)=>(<div key={index}>
  <h2>Name: { movie.title }</h2>
    <p>Time: { movie.time }</p>
    <ul>
    Genres:

      {movie.genres.map((genre, index)=>(<li key={index}>{genre}</li>)) /* <li> { movie.genres } <br/> </li> */}
    </ul>
  </div>)) /*{code here}*/}</div>;
}

export default Movies;
