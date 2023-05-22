import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ProfileHead, Section, Wrapper } from './Profile.style';
import { useNavigate } from 'react-router-dom';
import SecurityCard from '../../components/SecurityCard/SecurityCard';
import { Box, CircularProgress } from '@mui/material';
import WebSection from '../../components/WebSection';

function Profile() {
    const navigate=useNavigate();
    const [userData,setuserData]=useState({});
    const [isLoading,setIsLoading]=useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/profile`,{
          headers:{
              'Content-Type': 'application/json',
              "isLoggedIn":localStorage.getItem("isLoggedIn"),
          }
        })
        .then((data)=>{
            setuserData(data.data.user);
            setIsLoading(false);
        })
        .catch((err)=>{
            console.log(err.message,err);
            alert(err);
            navigate("/");
        });
      }, []);

    // edit button Text
    const [editText,setEditText]=useState({
        description:'edit',
        profiles:'edit',
        profession:'edit',
        security:'change',
        interests:'edit',
    });

    // eidt btn functioning
    const handleEditBtn=async (e)=>{
        const {id,value}=e.target;

        if(editText[id]==='edit'){
            setEditText((prevProps)=>({
                ...prevProps,
                [id]:'save'
            }));
        }
        else{
            const sendData={
                ...userData,
                updated:id,
            }

            await axios.patch(`${process.env.REACT_APP_BASE_URL}/profile`,sendData)
                .then((data)=>{
                    console.log("Profile data updated");
                })
                .catch((err)=>{
                    const message=err.response.data.message;
                    // console.log(err);
                    alert(message || err.message);
                });

            setEditText((prevProps)=>({
                ...prevProps,
                [id]:'edit' 
            }));
        }
    };

    // on Input change
    const handleInputChange=(e)=>{
        const {id,value,name}=e.target;

        if(id==='profiles'){
            let obj={
                ...userData.profiles,
                [name]:value,
            }

            setuserData((prevProps)=>({
                ...prevProps,
                profiles:obj,
            }));

        }
        else{
            setuserData((prevProps)=>({
                ...prevProps,
                [id]:value
            }));
        }
    };

    return ( 
        <>
            {isLoading ?
            <Box
            width={"100%"}
            m='1rem auto'
            display='flex'
            alignItems={"center"}
            justifyContent={"center"}
            height={'80vh'}
          >
                <CircularProgress/>
            </Box> : 
            <Wrapper>
                <ProfileHead>
                    <div className='pf-user-box'>
                        <div className='UserHead'>
                            <img alt='profileImg' src={userData && userData.profileImg} className="profileImg"/>
                            
                            <div>
                                <div className='repu'>Hello,</div>
                                <div className='username'>{userData && userData.fName + ' ' + userData.lName}</div>
                                <div className='email'>{userData && userData.email}</div>
                            </div>
                        </div>
                        <div className='pf-followers'>{userData && userData.followers} Followers</div>
                    </div>
                </ProfileHead>
                
                <Section>
                    <div className='sectionHead'>
                        <div className='section-topic'>About Me</div>
                        <div className='edit-btn' id='description' onClick={(e)=>handleEditBtn(e)}>{ editText && editText.description}</div>
                    </div>
                    <textarea placeholder='Add something about you.' id='description' className='textarea' readOnly={editText.description==='edit'} value={userData.description} onInput={(e)=>handleInputChange(e)}/>
                </Section>

                <hr/>

                <Section>
                    <div className='sectionHead'>
                        <div>Cipher Map</div>
                    </div>
                    <div>Cipher Map</div>
                </Section>

                <hr/>

                <WebSection handleEditBtn={handleEditBtn} handleInputChange={handleInputChange} editText={editText} userData={userData}/>                

                <hr/>

                <Section>
                    <div className='sectionHead'>
                        <div className='section-topic'>Professional information</div>
                        <div className='edit-btn' id='profession' onClick={(e)=>handleEditBtn(e)}>{ editText && editText.profession}</div>
                    </div>
                    <div className='education'>
                        <div className='education-card'>
                            <label className='label' htmlFor='linkedin'>Highest education</label>
                            <input type="url" name='linkedin' placeholder='Linkedin' className='input' readOnly={editText.profession==='edit'}/>
                        </div>
                        <div className='education-card'>
                            <label className='label' htmlFor='linkedin'>What do you do currently?</label>
                            <input type="url" name='linkedin' placeholder='Github' className='input' readOnly={editText.profession==='edit'}/>
                        </div>
                    </div>
                </Section>

                <hr/>

                <SecurityCard editText={editText} userData={userData} setEditText={setEditText} id={userData._id}/>

                <hr/>

                <Section>
                    <div className='sectionHead'>
                        <div className='section-topic'>Interests</div>
                        <div className='edit-btn' id='interests' onClick={()=>handleEditBtn()}>{ editText && editText.interests}</div>
                    </div>
                </Section>

            </Wrapper>
            }
        </>
    );
}

export default Profile;