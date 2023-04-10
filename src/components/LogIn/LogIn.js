import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './LogIn.style';

function LogIn({callback}) {
    const navigate=useNavigate();
    const [userDetails, setUserDetails] = useState({
        email:'',
        password:'',
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
        e.preventDefault();
        await axios.post('http://localhost:5000/user/login',userDetails)
            .then((data)=>{
                if(data.data.token){
                    localStorage.setItem('isLoggedIn',data.data.token);
                }
            })
            .then(()=>{
                navigate('/profile');
            })
            .catch((err)=>{
                alert(err.message || err);
            });
    };

    return (
        <Wrapper>
            <div className='heading'>Sign In</div>
            <div className='auth'>
                <h2 className='title'>CipherSchools</h2>
                <div className='welcome'>Hey, Welcome!</div>
                <div className='instructions' >Please provide your email and password to signin</div>                 
                <form onSubmit={(e)=>handleSubmit(e)} className='form'>
                    <input type="email" placeholder='EMAIL ID' id="email" className='input' value={userDetails.email} onChange={(e)=>handleInputChange(e)} required/>
                    <input type="password" placeholder='Password'id="password" className='input' value={userDetails.password} onChange={(e)=>handleInputChange(e)} required/>
                    <div className='forgot'>Forgot Password ?</div>
                    <button className='button' type='submit'>Log In</button>
                </form>

                <div className='changeState'>
                    <span className='no-account'>Don't have an account?</span>
                    <span className='get-started' onClick={()=>callback()}>Get Started</span>
                </div>
            </div>
        </Wrapper>
    );
}

export default LogIn;