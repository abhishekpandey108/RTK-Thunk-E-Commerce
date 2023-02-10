import { useState, useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../RTK/productSlice";
import { STATUSES } from "../RTK/productSlice";

export default function Product(){

    const dispatch = useDispatch();
    const { data:product, status } = useSelector((state)=>state.product)

    //const[product,setProduct] = useState([]);

useEffect(()=>{
    dispatch(fetchProduct())
    // async function getProduct(){
    // let res =  await fetch(`https://fakestoreapi.com/products`);
    // let data  = await res.json();
    // setProduct(data);
    // console.log(data)
    // }

    // getProduct();
    console.log("products: ",product)

},[])


    if(status===STATUSES.LOADING){
        return (
            <>
            <h3>Loading...</h3>
            </>
        )
    }

    else if(status===STATUSES.ERROR){
        return (
            <>
            <h3>Something went wrong ! ...</h3>
            </>
        )
    }

    return(
        <>
        <div className="line">

            {
                product.map((item)=>
                <Card item={item} key={item.id} />
                )
            }

        </div>
        
        </>
    )
}