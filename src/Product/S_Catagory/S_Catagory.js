import React,{useState,useEffect} from 'react'
//import productData from '../Product.json'
import { Link,useParams } from 'react-router-dom'
import axios  from 'axios'
import { Button, Card } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';


const S_Catagory = () => {
    const subcat=useParams();
    console.log("Value in subcat: ",subcat);
   

    let subcatname=subcat.pcat;
    const[subProducts,change_state]=useState({subProd:[]})
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${subcatname}`)
        .then(res=>{
            console.log("Axios respones",res.data);
            change_state({subProd:res.data})
        })
        .catch(err=>{
            console.log("Axios err",err);
        })
    },[change_state])
    
    // let product=productData.Product.find((data)=>data.p_id===value.pid)
    // console.log("Product with subcatagory",product);
    return (
        <div>
            <h1>SubCatagory</h1>
            {/* {
                product.subCatagory.map((subcat)=>
                <React.Fragment key={subcat.s_id}>

                    
                <h1>{subcat.company}</h1>
                <button><Link to={`/pDetails/${value.pid}/${subcat.s_id}`}>Details</Link></button>
                </React.Fragment>)
            } */}

            <Row xs={1} md={3} className="g-4">
                {
                    subProducts.subProd.map((subcat)=>
                    <Col key={subcat.id}>
                        <Card>
                            <Card.Img variant="top" src={subcat.image} />
                            <Card.Body>
                                <Card.Title>{subcat.company}</Card.Title>
                                <Card.Text>{subcat.price}</Card.Text>
                                <Link to={`/pDetails/${subcat.id}`}><Button>Details</Button></Link>
                            </Card.Body>
                        
                        </Card>
                    </Col>)
                }
            </Row>
        </div> 
    )
}

export default S_Catagory
