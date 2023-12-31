import axios from 'axios';
import Cards from './Cards';
import React, { useEffect } from 'react'
import "./Styles/Main.css"

const Main = () => {
    const [data, setData] = React.useState({});
    useEffect(() => {
        axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json').then((res) => {
            // console.log(Object.values(res.data?.products).sort((a, b) => b.popularity - a.popularity));
            setData(Object.values(res.data?.products).sort((a, b) => b.popularity - a.popularity));
        }).catch((err) => {
            console.log(err);
        })
    }, []);

  return (
  //   <ul>
  //   {Object.values(data).map((product, index) => (
  //     <li key={index}>
  //       <h2>{product.title}</h2>
  //       <p>Price: {product.price}</p>
  //       {/* Render other product details as needed */}
  //     </li>
  //   ))}
  // </ul>
    <div className='Main'> 
        {
          Object.values(data).map((prod, index) => {
            return (
              <Cards data={prod} key={index} />
            )
          }
)}
    </div>
  )
}

export default Main