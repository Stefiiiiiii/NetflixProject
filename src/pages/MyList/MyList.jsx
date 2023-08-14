import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Item from '../../components/Item/Item';

import './MyList.css';

export default function MyList() {
    const [likedMovies] = useOutletContext();
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [distance, setDistance] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {
        // Numarul maxim de slide la dreapta
        var maxSlideNumber = likedMovies.length - window.innerWidth / 230;

        if (direction === 'left' && slideNumber > 0) {
            // Daca directia e stanga si numarul de deplasari fata de pozitia initiala este 1,
            // atunci inseamna ca revenim la pozitia initiala si ascundem sageata la stanga
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
            setIsMoved(true);
        }
    };

    return (
        <div className="myList">
            <h1 className="myListTitle">My List</h1>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon
                    className="slideArrow left"
                    onClick={() => handleClick('left')}
                    style={{ display: !isMoved && 'none' }}
                />
                <div className="container" ref={listRef}>
                    {likedMovies.map((imgPath) => (
                        <Item
                            column={0}
                            row={0}
                            imgPath={imgPath}
                            childToParent={null}
                            description={''}
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
