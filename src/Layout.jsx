import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/navBar/navbar';

export default function Layout() {
    const [likedMovies, setLikedMovies] = useState([]);

    // Add a movie to the "My List" movies
    const addLikedMovie = (movie) => {
        let copyLikedMovie = [...likedMovies];
        copyLikedMovie.push(movie);
        setLikedMovies(copyLikedMovie);
    };

    // Remove a movie to the "My List" movies
    const removeLikedMovie = (movie) => {
        let copyLikedMovie = [];
        for (let i = 0; i < likedMovies.length; i++) {
            if (likedMovies[i] !== movie) {
                copyLikedMovie.push(likedMovies[i]);
            }
        }
        setLikedMovies(copyLikedMovie);
    };
    return (
        <div>
            <Navbar />
            <Outlet context={[likedMovies, addLikedMovie, removeLikedMovie]} />
            <Footer />
        </div>
    );
}
