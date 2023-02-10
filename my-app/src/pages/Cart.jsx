import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../RTK/cartSlice'
export default function Cart(){
const dispatch = useDispatch();
let products = useSelector((state)=>state.cart);

function handleRemove(id){
    dispatch(remove(id))
}

    return(
        <>
        <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        
        </>
    )
}