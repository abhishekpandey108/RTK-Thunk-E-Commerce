import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";


export default function Navbar(){
let count = useSelector((state)=>{
    return state.cart
})


    return(
        <>
        <nav className="nav">
            <p>RTK Store</p>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='cart'>Cart</Link>
            
                <span>Cart Items : {count.length}</span>
            </div>
        </nav>
        
        </>
    )
}