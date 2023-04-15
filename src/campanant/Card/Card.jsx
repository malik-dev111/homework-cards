import React, { useEffect,useState } from 'react'
import './Card.scss'

const Card = () => {
  const [data,setData] = useState([])
  const [id,setId] = useState(1)
  useEffect(()=>{
    console.log('Card yarandi')
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setData(json));
  },[id])
  return (
    <div className='card-c'>
      {
        data.map(item=>{
          return (
            <div className="card">
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <button>{item.price}</button>
            </div>
          );
        })
      }
    </div>
  );
}

export default Card