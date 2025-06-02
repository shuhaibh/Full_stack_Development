import React from "react";

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li
          key={movie.id}
          style={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            backgroundColor: "rgb(152, 127, 69)",
            border: "3px dashed black",
            borderRadius: "2px",
            textAlign:"center",
            listStyle:"none",
            margin:"20px",
            padding:"5px"
          }}
        >
          {movie.title}-{movie.releaseYear}
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
