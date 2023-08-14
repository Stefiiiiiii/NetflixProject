import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useRef, useState } from 'react';
// import ListItem from '../listItem/ListItem';
import requests from '../../Requests';
import Item from '../Item/Item';
import './list.css';

export default function List({ row, childToParent, title }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        let fetchRequest;
        switch (title) {
            case 'Trending':
                fetchRequest = requests.fetchTrending;
                break;
            case 'Top Rated':
                fetchRequest = requests.fetchTopRated;
                break;
            case 'Action Movies':
                fetchRequest = requests.fetchActionMovies;
                break;
            case 'Comedy Movies':
                fetchRequest = requests.fetchComedyMovies;
                break;
            case 'Horror Movies':
                fetchRequest = requests.fetchHorrorMovies;
                break;
            case 'Romance Movies':
                fetchRequest = requests.fetchRomanceMovies;
                break;
            case 'Documentaries':
                fetchRequest = requests.fetchDocumentaries;
                break;
            default:
                break;
        }

        fetch(requests.BASE_URL + fetchRequest)
            .then((response) => response.json())
            .then((data) => {
                if (movies.length === 10) {
                    return;
                }
                let movieData = [];
                for (let i = 0; i < 10; i++) {
                    let movie = {};
                    movie.name =
                        data.results[i]?.title ||
                        data.results[i]?.name ||
                        data.results[i]?.original_title;
                    movie.column = i;
                    if (data.results[i].backdrop_path != null)
                        movie.imgPath =
                            'https://image.tmdb.org/t/p/original/' + data.results[i].backdrop_path;
                    movie.description = data.results[i]?.overview;
                    movieData.push(movie);
                }
                setMovies(movieData);
            });
    }, [title, movies]);

    const listRef = useRef();
    const listItemNumber = 10;

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [distance, setDistance] = useState(0);

    const handleClick = (direction) => {
        setIsMoved(true);
        var maxSlideNumber = listItemNumber - window.innerWidth / 230;

        if (direction === 'left' && slideNumber > 0) {
            if (slideNumber === 1) {
                setIsMoved(false);
            }
            setSlideNumber(slideNumber - 1);
            setDistance(distance + 230);
            listRef.current.style.transform = `translateX(${distance + 230}px)`;
        }
        if (direction === 'right' && slideNumber < maxSlideNumber) {
            setSlideNumber(slideNumber + 1);
            setDistance(distance - 230);
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
        }
    };

    return (
        <div className="list">
            <span className="listTitle">{title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon
                    className="slideArrow left"
                    onClick={() => handleClick('left')}
                    style={{ display: !isMoved && 'none' }}
                />
                <div className="container" ref={listRef}>
                    {movies.map(({ column, imgPath, description }) => (
                        <Item
                            column={column - slideNumber}
                            row={row}
                            imgPath={imgPath}
                            childToParent={childToParent}
                            description={description}
                        />
                    ))}
                </div>
                <ArrowForwardIosOutlinedIcon
                    className="slideArrow right"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
}
