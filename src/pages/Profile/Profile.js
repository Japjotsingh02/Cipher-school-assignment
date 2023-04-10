import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ProfileHead, Section, Wrapper } from './Profile.style';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const [profileData,setProfileData]=useState({});
    const navigate=useNavigate();

    useEffect(() => {
      axios.get("http://localhost:5000/user/profile",{
        headers:{
            'Content-Type': 'application/json',
            "isLoggedIn":localStorage.getItem("isLoggedIn"),
        }
      })
      .then((data)=>{
          console.log(data.data.user);
          setProfileData(data.data.user);
      })
      .catch((err)=>{
          alert(err);
          navigate("/");
      });
    }, []);

    const handleEditBtn=()=>{
        
    };

    return (
        <Wrapper>
            <ProfileHead>
                <div className='UserHead'>
                    <img alt='profileImg' src={profileData && profileData.profileImg} className="profileImg"/>
                    <div>
                        <div className='repu'>Hello,</div>
                        <div className='username'>{profileData && profileData.fName + ' ' + profileData.lName}</div>
                        <div className='email'>{profileData && profileData.email}</div>
                    </div>
                </div>
                <div>{profileData && profileData.followers} Followers</div>
            </ProfileHead>
            
            <Section>
                <div className='sectionHead'>
                    <div className='section-topic'>About Me</div>
                    <div className='edit-btn' onClick={()=>handleEditBtn()}>Edit</div>
                </div>
                <textarea placeholder='Add something about you.' />
            </Section>

            <Section>
                <div className='sectionHead'>
                    <div>Cipher Map</div>
                </div>
                <textarea placeholder='Add something about you.' />
            </Section>

            <Section>
                <div className='sectionHead'>
                    <div className='section-topic'>About Me</div>
                    <div className='edit-btn' onClick={()=>handleEditBtn()}>Edit</div>
                </div>
                <textarea placeholder='Add something about you.' />
            </Section>

            <Section>
                <div className='sectionHead'>
                    <div className='section-topic'>About Me</div>
                    <div className='edit-btn' onClick={()=>handleEditBtn()}>Edit</div>
                </div>
                <textarea placeholder='Add something about you.' />
            </Section>

            <Section>
                <div className='sectionHead'>
                    <div className='section-topic'>About Me</div>
                    <div className='edit-btn' onClick={()=>handleEditBtn()}>Edit</div>
                </div>
                <textarea placeholder='Add something about you.' />
            </Section>

            <Section>
                <div className='sectionHead'>
                    <div className='section-topic'>About Me</div>
                    <div className='edit-btn' onClick={()=>handleEditBtn()}>Edit</div>
                </div>
                <textarea placeholder='Add something about you.' />
            </Section>

        </Wrapper>
    );
}

export default Profile;