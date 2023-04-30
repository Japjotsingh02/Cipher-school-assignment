import styled from "styled-components";

export const Wrapper=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap');
    background-color: #15181e;
    font-family:'Open Sans',sans-serif;
    color:white;
`;

export const ProfileHead=styled.div`
    background-image: url(https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    color:white;
    background-color:#202b47;
    margin-bottom:1rem;
    
    .pf-user-box{
        display:flex;
        padding:15px 40px;
        justify-content:space-between;
        align-items:center;
        width: -webkit-fill-available;
    }
    
    .UserHead{
        display:flex;
        align-items:center;
        gap:1.2rem;
    }

    .profileImg{
        border-radius:50%;
        width:5rem;
        height:5rem;
    }

    .repu{
        font-size:1.5rem;
    }

    .username{
        font-size:2rem;
        font-weight:700;
    }

    .email{
        font-size:1rem;
    }

    .pf-followers{
        font-size:1.1rem;
        font-weight:500;
    }
`;

export const Section=styled.div`
    padding:10px 40px;

    .sectionHead{
        display:flex;
        justify-content:space-between;
        padding-bottom:1rem;
        font-size:1rem;
        font-weight:700;
        text-transform:uppercase;
    }

    .textarea{
        background-color: #262c36;
        height:100px;
        border:0;
        width:-webkit-fill-available;
        border-radius:8px;
        padding: 0.75rem;
        font-size: 14px;
        color: hsla(0,0%,100%,.75);
        font-family:'Open Sans',sans-serif;
        font-weight:500;
        resize:none;
    }

    .input:focus,.textarea:focus{
        border:0;
        outline:0;
    }

    .edit-btn{
        font-family:'Open Sans',sans-serif;
        font-size:13px;
        font-weight:400;
        width:80px;
        background-color:#f3912e;
        border-radius:3px;
        text-align:center;
        cursor:pointer;
        text-transform:capitalize;
        padding:4px 0px;
    }

    .label{
        text-transform:capitalize;
    }

    .profile-card,.education-card{
        flex:1 0 48%;
        margin-left:1rem;
    }

    .input{
        border:0;
        background-color: #262c36;
        width:-webkit-fill-available;
        border-radius:8px;
        padding: 0.75rem;
        font-size: 14px;
        color: hsla(0,0%,100%,.75);
        font-family:'Open Sans',sans-serif;
        font-weight:500;
        resize:none;
        margin-top:0.5rem;
        margin-bottom:1rem;
    }

    .profiles,.education{
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Model=styled.div`
    position:fixed;
    inset:0px;
    font-family:'Open Sans',sans-serif;

    form{
        background-color: #262c36;
        padding: 2rem;
        position: absolute;
        top: 25%;
        width: 35%;
        z-index: 99;
        left: 31%;
        border-radius: 1rem;
    }

    .input{
        background-color: #15181e;
        color:hsla(0,0%,100%,.85);
        font-size:15px;
    }

    .modelBg{
        position:fixed;
        z-index:30;
        height:100vh;
        width:100vw;
        background-color: rgba(0,0,0,.5);
        inset:0px;
    }

    .submit{
        border:0;
        font-size:14px;
        color:#ffffff;
        height:2.5rem;
        width:7rem;
        border-radius:6px;
    }

    .cancel{
        background-color:hsla(0,0%,100%,.85);
        border:0;
        border-radius:6px;
        font-size:14px;
        height:2.5rem;
        width:7rem;
        margin-right:1rem;
    }

    .buttons{
        float:right;
    }
`;


