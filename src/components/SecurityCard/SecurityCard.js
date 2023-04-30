import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Model, Section } from '../../pages/Profile/Profile.style';

function SecurityCard({editText,userData,id}) {
    const [openPasswordModel,setOpenPasswordModel]=useState(false);
    const currentPass=useRef('');
    const confirmPass=useRef('');
    const newPass=useRef('');

    const handleChangePassword=async (e)=>{
        e.preventDefault();

        const obj={
            id,
            currentPass:currentPass.current?.value,
            confirmPass:confirmPass.current?.value,
            newPass:newPass.current?.value
        };

        await axios.patch("http://localhost:5000/user/updatePassword",obj)
            .then((data)=>{
                console.log(data.data.message);
                setOpenPasswordModel(false);
            })
            .catch((err)=>{
                const message=err.response.data.message;
                alert(message || err.message);
            });
    };

    return (
        <Section>
            <div className='sectionHead'>
                <div className='section-topic'>Password & security</div>
                <div className='edit-btn' id='security' onClick={()=>setOpenPasswordModel(true)}>Change</div>
            </div>
            <div>
                <label className='label' htmlFor='changePsw'>Password</label>
                <input type="password"  name='changePsw' className='input' readOnly value={userData.password}/>
            </div>
            {openPasswordModel && 
                <>
                    <Model>
                        <form onSubmit={(e)=>handleChangePassword(e)}>
                            <div className='password-card'>
                                <label className='label' htmlFor='currentPassword'>Current Password</label>
                                <input type="password" name='currentPassword' id='currentPass' ref={currentPass} placeholder='Current Password' className='input' required/>
                            </div>
                            <div className='password-card'>
                                <label className='label' htmlFor='newPassword'>New Password</label>
                                <input type="password" name='newPassword' id='newPass' ref={newPass} placeholder='New Password' className='input' required/>
                            </div>
                            <div className='password-card'>
                                <label className='label' htmlFor='confirmPassword'>Confirm Password</label>
                                <input type="password" name='confirmPassword' id='confirmPass' ref={confirmPass} placeholder='Confirm Password' className='input' required/>
                            </div>
                            <div className='buttons'>
                                <button type='button' className='edit-btn cancel' onClick={()=>setOpenPasswordModel(false)}>Cancel</button>
                                <button type='submit' className='edit-btn submit'>Save</button>
                            </div>
                        </form>

                        <div className='modelBg'></div>
                    </Model>
                </>
            }
        </Section>
    );
}

export default SecurityCard;