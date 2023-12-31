import React from 'react'
import "./Styles/Cards.css"
const Cards = ({ data }) => {
    return (
      <div className="Cards">
        <h2 title={data.title}>{data.title.length>15?`${data.title.slice(0,15)}..`:data.title}</h2>
        <p><b>Price:</b> ${data.price}</p>
        <p><b>Popularity:</b> {data.popularity}</p>
      </div>
    );
  };

export default Cards