import React from 'react'
import './T_Cat.css'
import topData from '../Topics.json' 
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
// import { useParams } from 'react-router-dom'

const T_Cat = () => {
    return (
        <>
           <h1>Different Topics</h1> 
           <ul>
               {
                   topData.Topics.map((top)=>
                   <li key={top.t_id}>
                       {top.t_name}<br/>
                     <Link to={`/subcat/${top.t_id}`}>
                         <Button className='my_btn'>Go to SubCatagory</Button></Link>
                       
                   </li>
                   )
               }
           </ul>
        </>
    )
}

export default T_Cat


