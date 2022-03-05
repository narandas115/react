import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'


const Feedback = () => {
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{0-15}).([a-z.]{2-10})$');
    const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const validatePhone=RegExp('^([6-9]{1})([0-9]{9})$');
//Step:2
    const [inputState,setInputState]=useState({isError:{
        fName:'',mName:'',lName:'',phone:'',email:'',password:''
    }})
    //Step:3(After on change)
    const handleChange=(event)=>{
        event.persist();
        console.log("Event: ",event);
        let {name ,value }=event.target;
        let err={...inputState.isError};
        switch(name){
            case'fName':err.fName=value.length<3?"Atleast 3 characters required":"";
                       break;
            case'mName':err.mName=value.length<3?"Atleast 3 characters required":"";
                       break;
            case'lName':err.lName=value.length<2?"Atleast 2 characters required":"";
                       break;
            case'phone':err.phone=validatePhone.test(value)?"":"Error Pattern"
                       break;
            case'email':err.email=validateEmail.test(value)?"":"Error Pattern"
                       break;
            case'password':err.password=validatePassword.test(value)?"":"Error Pattern"
                       break;
             default:break;

        }
        setInputState({...inputState,[name]:value,isError:err})
        console.log("input value: ",inputState);
    }
    //Step:4(After on Submit)
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("After Submit: ",inputState);
    }
    return (
        //Step:1
        <div className="container">
            <h1>Enter your Data</h1>
            <form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicFname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your First Name" name="fName" onChange={handleChange} />
                    {/* onChange detects the change in input fild */}
                    {inputState.isError.fName.length>0 &&(
                     <span>{inputState.isError.fName}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMname">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Middle Name" name="mName"onChange={handleChange} />
                    {inputState.isError.mName.length>0 &&(
                     <span>{inputState.isError.mName}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Last Name" name="lName"onChange={handleChange} />
                    {inputState.isError.lName.length>0 &&(
                     <span>{inputState.isError.lName}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Phone Number" name="phone"onChange={handleChange} />
                    {inputState.isError.phone.length>0 &&(
                     <span>{inputState.isError.phone}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email ID:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Valid Email" name="email"onChange={handleChange} />
                    {inputState.isError.email.length>0 &&(
                     <span>{inputState.isError.email}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" name="password"onChange={handleChange} />
                    {inputState.isError.password.length>0 &&(
                     <span>{inputState.isError.password}</span>
                    )}
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control type="Checkbox" label="Check me Out"/>
                </Form.Group> */}
                
                <button variant="primary" type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Feedback;
