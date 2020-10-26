// import React from "react";

// function Movie({title, year, rating, summary, poster, genres}) {
//     return(
//         <div className="movie">
//             <img src={poster} alt={title} title={title} />
//             <div className="movie_data">
//                 <div className="movie_title">{title}</div>
//                 <div className="movie_year">{year}</div>
//                 <div className="movie_rating">{rating}</div>
//                 <div className="movie_summary">{summary}</div>
//                 <ul>
//                     {genres.map((genre, index) => (
//                         <li key={index}>{genre}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Movie;

import React from 'react';

function Movie({title, year, rating, poster, genres, summary}) {
    return(
        <div>
            <img src={poster} alt={title} title={title} />
            <div>
                <div>{title}</div>
                <div>{year}</div>
                <div>{rating}</div>
                <div>{summary}</div>
                <ul>
                    {genres.map(genre => (
                        <li>{genre}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Movie;