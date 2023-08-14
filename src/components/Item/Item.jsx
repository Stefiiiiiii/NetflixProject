import { useRef } from 'react';
import './Item.css';

export default function Item({ column, row, imgPath, childToParent, description }) {
    let ref = useRef(null);
    return (
        <div
            ref={ref}
            className="item"
            onMouseEnter={() => {
                var isHovered = true;
                if (childToParent !== null && childToParent !== undefined)
                    childToParent({ imgPath, isHovered, column, row, description });
            }}
        >
            <img src={imgPath} alt=""></img>
        </div>
    );
}
