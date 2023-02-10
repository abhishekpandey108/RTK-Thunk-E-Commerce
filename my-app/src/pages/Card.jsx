import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../RTK/cartSlice';
export default function({item}){
const dispatch = useDispatch();

function addToCart(item){
    dispatch(add(item));
}

    return(
        <>
        <div className='card'>
            <img src={item.image} alt="img" />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={()=>{addToCart(item)}} style={{color:'white', border:'none',borderRadius:'2px' ,backgroundColor:'orange'}} > Add to Cart</button>

        </div>
        
        </>
    )
} 