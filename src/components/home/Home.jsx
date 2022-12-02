import { useEffect, useState } from "react";
import MovieCard from "./MovieCard"

// css
import './style.css'

const Home = () => {


    const [movieList, setMovieList] = useState([]);
    const [search, setSearch] = useState('spider');



    useEffect(() => {
        const getMovieRequest = async (search) => {
            const url = `https://www.omdbapi.com/?s=${search}&apikey=263d22d8`;

            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson.Search) {
                setMovieList(responseJson.Search);
            }
        };

        getMovieRequest(search);
    }, [search]);

    const handleInput = (name) => {
        setSearch(name)
    }
    return (
        <div className="mainwrapper">
            {/* navbar */}
            <div className="navbar">
                <div className="nav-logo">
                    <img src="/images/movie_logo.gif" alt="" />
                    <h1>MovieWorld</h1>
                </div>
                <div className="searchbar">
                    <input type="text"
                        placeholder='Type movie name'
                        onChange={(e) => handleInput(e.target.value)}
                    />
                </div>
            </div>

            {/* movielist */}

            <div className="movielist">
                {
                    movieList &&
                    movieList.map(movie => (
                        <MovieCard
                            poster={movie.Poster}
                            title={movie.Title}
                            type={movie.Type}
                            year={movie.Year}
                        />
                    ))
                }

            </div>

        </div>
    )
}
export default Home;