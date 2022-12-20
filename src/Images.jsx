import React, {Suspense} from "react";
import './App.css';
export const Images = ({images}) => {

    return (
        <Suspense >
            <img className="img_selected" onContextMenu={(e)=> e.preventDefault()} src={images} alt='maa'></img>
        </Suspense>
    )
};