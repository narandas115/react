import React ,{useState,useEffect}from 'react'
//import prodata from '../Product.json'
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function P_Catagory() { 
    const [productState,changeState]=useState({
        products:[]
    })
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log("Axios respones",res.data);
            changeState({products:res.data})
        })
        .catch(err=>{
            console.log("Axios error",err);
        })
        
    },[changeState])
    return (
        <div>
             <h1>Different Product</h1>
            {/*for  product.json <ul>
                {
                    prodata.Product.map((product1)=>
                    <li key={product1.p_id}><Link to={`/sub_cat/${product1.p_id}`}>{product1.p_name}
                        </Link></li>)
                }
            </ul> */}

<ul>
                {
                    productState.products.map((product1)=>
                    <li key={product1.id}><Link to={`/sub_cat/${product1.category}`}>{product1.title}
                        </Link></li>)
                }
            </ul>
            
        </div>
    )
}
// export default P_Catagory;
