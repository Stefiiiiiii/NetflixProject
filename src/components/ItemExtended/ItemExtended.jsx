import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import './ItemExtended.css';

export default function ItemExtended(props) {
    // Calls the callback from Layout to add a movie
    function addClick() {
        if (!props.isLiked(props.imgPath)) {
            props.addLikedMovieCallback(props.imgPath);
        }
    }

    // Calls the callback from Layout to remove a movie
    function removeClick() {
        if (props.isLiked(props.imgPath)) {
            props.removeLikedMovieCallback(props.imgPath);
        }
    }

    return (
        <div
            className="itemExtended"
            style={{
                left: props.column * 225 + props.column * 2.5,
                top: 650 + props.row * 120 + props.row * 47,
            }}
            onMouseLeave={() => {
                var isHovered = false;
                props.childToParent({ isHovered });
            }}
        >
            <img src={'https://image.tmdb.org/t/p/original/' + props.imgPath} alt=""></img>
            <div className="itemExtendedInfo">
                <div className="icons">
                    <PlayArrow className="icon" />
                    {props.isLiked(props.imgPath) ? (
                        <RemoveOutlinedIcon className="icon" onClick={removeClick} />
                    ) : (
                        <Add className="icon" onClick={addClick} />
                    )}
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownOffAltOutlined className="icon" />
                </div>
                <div className="itemExtendedInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+16</span>
                </div>
                <div className="desc">{props.description}</div>
            </div>
        </div>
    );
}
