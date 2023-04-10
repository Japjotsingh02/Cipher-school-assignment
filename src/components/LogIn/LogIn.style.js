import styled from "styled-components";

export const Wrapper=styled.div`
    width:60%;
    color:#ffffff;
    background-color: #262c36;
    border-radius: 20px;
    margin:3vh auto;
    padding:15px;

    .heading{
        font-weight:400;
        font-size:1.8rem;
        margin-bottom:1rem;
    }

    .title{
        margin-top:0;
        text-align:center;
    }

    .auth{
        background-color:#15181e;
        border-radius: 1rem;
        padding: 15px 15px 20px;
    }

    .welcome{
        color:hsla(0,0%,100%,.85);
    }
    
    .instructions{
        color:hsla(0,0%,100%,.75);
    }

    .welcome,.instructions{
        text-align:center;
    }

    .form{
        display:flex;
        flex-direction:column;
        margin-top:2rem;
    }

    .input{
        background-color: #262c36;
        font-size:1rem;
        border-radius: 1rem;
        color:#f1f1f1;
        margin-bottom:0.8rem;
        border:0;
        padding:0.8rem;
    }

    .input:focus{
        border:0;
        outline:0;
    }

    .forgot{
        align-self: flex-end;
        color:#f3912e;
    }

    .button{
        background-color:#f3912e;
        color:white;
        padding:0.6rem;
        border:0;
        font-size:1rem;
        margin:12px 0;
        border-radius:10px;
    }

    .changeState{
        text-align:center;

        .get-started{
            color:#f3912e;
        }
    }
`;