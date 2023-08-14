import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ItemExtended from '../../components/ItemExtended/ItemExtended';
import List from '../../components/list/List';
import Featured from '../../components/navBar/featured/Featured';
import './Home.css';

const Home = () => {
    const [itemExtendedData, setitemExtendedData] = useState({});
    const [likedMovies, addLikedMovie, removeLikedMovie] = useOutletContext();

    // Get data from Item, to be sent to ItemExtended
    const childToParent = (childdata) => {
        setitemExtendedData(childdata);
    };

    function isLiked(imgPath) {
        if (likedMovies.includes(imgPath)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="home">
            <Featured />
            {itemExtendedData.isHovered && (
                <ItemExtended
                    column={itemExtendedData.column}
                    row={itemExtendedData.row}
                    description={itemExtendedData.description}
                    imgPath={itemExtendedData.imgPath}
                    childToParent={childToParent}
                    addLikedMovieCallback={addLikedMovie}
                    removeLikedMovieCallback={removeLikedMovie}
                    isLiked={isLiked}
                />
            )}
            <List row={0} childToParent={childToParent} title={'Trending'} />
            <List row={1} childToParent={childToParent} title={'Top Rated'} />
            <List row={2} childToParent={childToParent} title={'Action Movies'} />
            <List row={3} childToParent={childToParent} title={'Comedy Movies'} />
            <List row={4} childToParent={childToParent} title={'Horror Movies'} />
            <List row={5} childToParent={childToParent} title={'Romance Movies'} />
            <List row={6} childToParent={childToParent} title={'Documentaries'} />
        </div>
    );
};
export default Home;
