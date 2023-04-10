import React, { useState } from 'react';
import LogIn from '../../components/LogIn/LogIn';
import SignUp from '../../components/SignUp/SignUp';

function SignPage(props) {
    const [logIn,setLogIn]=useState(true);

    const changeState=()=>{
        setLogIn(!logIn);
    }

    return (
        <>
            {logIn ? <LogIn callback={changeState}/> : <SignUp callback={changeState}/> }
        </>
    );
}

export default SignPage;