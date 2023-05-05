import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../LogIn/LogIn.style';

function SignUp({callback}) {
    const navigate=useNavigate();
    const [userDetails, setUserDetails] = useState({
        email:'',
        password:'',
        fName:'',
        lName:'',
        phoneNo:''
    });

    const handleInputChange=(e)=>{
        const {id,value}=e.target;
        // console.log(id,value);
        setUserDetails((prevProps)=>({
            ...prevProps,
            [id]:value
        }));
    };

    const handleSubmit=async (e)=>{
        // console.log(userDetails);
        try{
            e.preventDefault();
            await axios.post(`${process.env.REACT_APP_BASE_URL}/signUp`,userDetails)
                .then((data)=>{
                    if(data.data.token){
                        localStorage.setItem('isLoggedIn',data.data.token);
                    }
                })
                .then(()=>{
                    navigate('/profile');
                })
                .catch((err)=>{
                    const message=err.response.data.message;
                    alert(message || err.message);
                })
        }
        catch(err){
            alert(err);
        }
    };

    return (
        <Wrapper>
            <div className='heading'>Sign Up</div>
            <div className='auth'>
                <h2 className='title'>Cipher Schools</h2>
                <div className='welcome'>Create New Account</div>
                <div className='instructions' >Please provide your valid information to signup</div>                 
                <form onSubmit={(e)=>handleSubmit(e)} className='form'>
                    <input type="text" placeholder='First Name' id="fName" className='input' value={userDetails.fname} onChange={(e)=>handleInputChange(e)} required/>
                    <input type="text" placeholder='Last Name' id="lName" className='input' value={userDetails.lname} onChange={(e)=>handleInputChange(e)} required/>
                    <input type="email" placeholder='EMAIL ID' id="email" className='input' value={userDetails.email} onChange={(e)=>handleInputChange(e)} required/>
                    <input type='tel' placeholder='Phone (optional)' id="phoneNo" className='input' value={userDetails.phoneNo} onChange={(e)=>handleInputChange(e)}/>
                    <input type="password" placeholder='Password'id="password" className='input' value={userDetails.password} onChange={(e)=>handleInputChange(e)} required/>
                    <button className='button' type='submit'>Sign Up</button>
                </form>

                <div className='changeState'>
                    <span className='no-account'>Already have an account?</span>
                    <span className='get-started'  onClick={()=>callback()}>  SignIn Now</span>
                </div>
            </div>
        </Wrapper>
    );
}

export default SignUp;