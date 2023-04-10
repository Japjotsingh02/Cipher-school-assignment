import styled from "styled-components";

export const Wrapper=styled.div`
    background-color: #15181e;
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
    display:flex;
    justify-content:space-between;

    .UserHead{
        display:flex;
        padding:5px 40px;
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
    }

    .email{
        font-size:1rem;
    }
`;

export const Section=styled.div`
    display:flex;
    justify-content:space-between;

    .sectionhead{
        display:flex;
        justify-content:space-between;
    }
`;



