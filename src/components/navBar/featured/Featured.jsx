import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import requests from '../../../Requests';
import './Featured.css';

export default function Featured() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(requests.BASE_URL + requests.fetchNetflixOriginals)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
            });
    }, []);

    return (
        <div className="featured">
            <img
                className="imgcover"
                src={'https://image.tmdb.org/t/p/original/' + movie?.backdrop_path}
                alt=""
            ></img>
            <div className="info">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <span className="description">{movie?.overview}</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
