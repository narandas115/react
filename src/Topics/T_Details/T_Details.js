import React from 'react'
import './T_Details.css'
import topData from '../Topics.json'
import { useParams } from 'react-router-dom'

const T_Details = () => {
    let value=useParams();
    console.log("details: ",value);

    let topics=topData.Topics.find((data)=>data.t_id===value.tid);
    console.log("topics: ",topics);

    let singleTopics=topics.SubTopic.find((data)=>data.s_id===value.sid);
    console.log("Single Topics: ",singleTopics);
    
    return (
        <>
        <img src={singleTopics.s_img} alt="topics img" className='top_img'/>
        <h1>{singleTopics.subName }</h1>
        <h5>{singleTopics.s_description}</h5>
        </>
    )
    
}

export default T_Details;
