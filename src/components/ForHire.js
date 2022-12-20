import React from "react";
import './ForHire.css'
import first from '../assets/first.jpg'
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'

export const ForHire = () => {

    return (
        <div>
        <div className="forhire">
            <h2>Commissions & Licensing</h2>
            <p>Egors work is available for licensing. Alternatively he is available for commissioned work whether it be fine art landscape, architectural or portrait. For a free quote please contact fwork.kulik@gmail.com with a detailed project outline.</p>
        </div>
        <div className="images">
            <img src={first}></img>
            <img src={second}></img>
            <img src={third}></img>

        </div>
        </div>
    )
};