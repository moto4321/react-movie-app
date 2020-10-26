// import React, { Component } from 'react';
// import Movie from "./Movie";
// import axios from "axios";

// class App extends Component {
//     state = {
//         isLoading: true,
//         movies: [],
//     }


//     getMovies = async() => {
//         const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
//         this.setState({movies, isLoading: false});
//     }

//     componentDidMount() {
//         this.getMovies();
//     }

//     render() {
//         const {isLoading, movies} = this.state;
//         return(
//             <div>
//                 {isLoading ? (<div>Loading...</div>) : (
//                     <div>{movies.map(movie => (
//                         <Movie
//                         title={movie.title}
//                         year={movie.year}
//                         rating={movie.rating}
//                         summary={movie.summary}
//                         poster={movie.medium_cover_image}
//                         genres={movie.genres}
//                         />
//                     ))}</div>
//                 )}
//             </div>
//         )
//     }
// }


// export default App;


import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends Component {
    state = {
        isLoading: true,
        movies: [],
    }

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json');
        this.setState({ isLoading: false, movies });
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <>
                {isLoading ? <div>Loading...</div> : (
                    <div>
                        {movies.map(movie => (
                            <Movie
                            title={movie.title}
                            year={movie.year}
                            ratin={movie.rating}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </>
        )
    }
}

export default App;