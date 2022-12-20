import React from "react";
import {Images} from '../Images';

export const Default = ({collection, aCollection}) => {
    return (
        <div>
            {collection.map((obj, index) => (
                
              <div key={index}>
              <Images images={`http://localhost:8000/${aCollection}/${obj}`} ></Images>
          </div>
          ))}
        </div>
    )
};