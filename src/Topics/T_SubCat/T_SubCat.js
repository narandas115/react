import React from 'react'
import './T_SubCat.css'
import topData from '../Topics.json' 
import { useParams,Link } from 'react-router-dom'
import { Row,Col,Card,Button } from 'react-bootstrap'

const SubCat = () => {
    const value=useParams();
    console.log("UseParams is subcat: ",value);

    let data=topData.Topics.find((top)=>top.t_id===value.tid);
    console.log("Topics: ",data);
    return (
        <>
            <h1>SubCatagory: </h1>
            <Row xs={1} md={3} className="g-4">
            {  
            data.SubTopic.map((subcat)=>
            <Col key={subcat.s_id}>
            <Card>
                <Card.Body>
                <img class="card-img-top" src={subcat.s_img} alt="topics img" />
                    <Card.Title>{subcat.subName}</Card.Title>
                    <Card.Text className='subimg' >{subcat.s_des}</Card.Text>
                    <Link to={`/details/${value.tid}/${subcat.s_id}`}><Button>Details</Button></Link>
                </Card.Body>
            </Card>
            </Col>
            )
            }   
            </Row>  
           </>    


     ) }

export default SubCat;
