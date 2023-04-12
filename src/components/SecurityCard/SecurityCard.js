import React from 'react';
import { Model, Section } from '../../pages/Profile/Profile.style';

function SecurityCard({editText,userData}) {
    const handleChangePassword=(e)=>{
        
    };

    return (
        <Section>
            <div className='sectionHead'>
                <div className='section-topic'>Password & security</div>
                <div className='edit-btn' id='security' onClick={()=>handleChangePassword()}>{ editText && editText.security}</div>
            </div>
            <div>
                <label className='label' htmlFor='changePsw'>Password</label>
                {editText.security==='change'
                    && <input type="password"  name='changePsw' className='input' readOnly value={userData.password}/>
                }
            </div>
            <Model>
            
            </Model>
        </Section>
    );
}

export default SecurityCard;