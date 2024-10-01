import "./style.scss";
import React, { useState } from 'react';
import { Tabs } from 'antd';
import { NormalButton } from '../../../../components/button/index.js';
import { NormalInput } from '../../../../components/input/index.js';
import assets from '../../../../assets/index.js';
import { LuImagePlus } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";


const DoctorSettings = () => {
    const [profileDisabled, setProfileDisabled] = useState(true);
    const [activePage, setActivePage] = useState(1);

    const [firstName, setFirstName] = useState("john");
    const [lastName, setLastName] = useState("doe");
    const [email, setEmail] = useState("anonymous@email.com");
    const [field, setField] = useState("Cardiologist");
    
    const [oldPassword, setOldPassword] = useState(""); 
    const [newPassword, setNewPassword] = useState(""); 
    const [confirmNewPassword, setConfirmNewPassword] = useState(""); 

    const onInputChange = ()=>{
        if(profileDisabled){
            setProfileDisabled(false)
        }
    }
    return ( 
        <div className='settings-cover'>
            <div className='mb-3em'>
                <h2 className='mb-1em'>Settings</h2>
                <p>Take a look at your policies and the new policy to see what is covered</p>
            </div>
            <div>
                <div className='tab-buttons mb-2em'>
                    <button className={`${activePage == 1 ? "active":""}`} onClick={()=>setActivePage(1)}>Profile</button>
                    <button className={`${activePage == 2 ? "active":""}`} onClick={()=>setActivePage(2)}>Security</button>
                </div>
                <div className='settings-box'>
                    {
                        activePage == 1 && (
                            <div className='profile-box'>
                                <div className='profile-image-box gap-20 mb-2em'>
                                    <div>
                                        <p className='text-bold mb-1em'>Profile photo</p>
                                        <p className='font-14 text-gray mb-1em'>
                                            This image will be displayed on your profile
                                        </p>
                                        <button className='change-photo-button'>
                                            <LuImagePlus size={16} color='#145B7A' />
                                            <span>
                                                Change Photo
                                            </span>
                                        </button>
                                    </div>
                                    <div className='profile-image-holder'>
                                        <img src={assets.profile} className='big-rounded-image' />
                                        <span style={{position: "absolute", bottom: 2, right: 5}}>
                                            <FaCheckCircle color='#145B7A' size={25} />
                                        </span>
                                    </div>
                                </div>
                                <form className='personal-info-box' onInput={onInputChange}>
                                    <div className="w-30 sm-w-100 mb-1em">
                                        <h3 className="mb-1em">Personal Information</h3>
                                        <p className="mb-1em text-gray font-14">Update your personal details here</p>
                                        <NormalButton disabled = {profileDisabled} style={{borderRadius: 10}}>
                                            Save changes
                                        </NormalButton>
                                    </div>
                                    <div className="w-60 sm-w-100">
                                        <div className='flex-between'>
                                            <div className='w-45 sm-w-100'>
                                                <NormalInput 
                                                    label={"First Name"}
                                                    value={firstName}
                                                    onChange={(e)=>setFirstName(e.target.value)}
                                                />
                                            </div>
                                            <div className='w-45 sm-w-100'>
                                                <NormalInput 
                                                    label={"Last Name"} 
                                                    value={lastName}
                                                    onChange={(e)=>setLastName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <NormalInput 
                                                label={"Email address"} 
                                                disabled={true} 
                                                value={email}
                                            />
                                        </div>
                                        <div>
                                            <NormalInput 
                                                label={"Field"} 
                                                value={field}
                                                onChange={(e)=>setField(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                    {activePage == 2 && (
                        <div className='security-box'>
                        <div className='personal-info-box'>
                                <div className="w-30 sm-w-100 mb-1em">
                                    <h3 className="mb-1em">Change Password</h3>
                                    <p className="mb-1em text-gray font-14">Update your personal details here</p>
                                    <NormalButton disabled = {profileDisabled} style={{borderRadius: 10}}>
                                        Save changes
                                    </NormalButton>
                                </div>
                                <div className="w-60 sm-w-100">
                                    <div className="mb-1em">
                                        <NormalInput 
                                            label={"Enter Current Password"} 
                                            value={oldPassword}
                                            onChange={(e)=>setOldPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-1em">
                                        <NormalInput 
                                            label={"Enter New Password"} 
                                            value={newPassword}
                                            onChange={setNewPassword}
                                        />
                                    </div>
                                    <div className="mb-1em">
                                        <NormalInput 
                                            label={"Confirm New Password"}
                                            value={confirmNewPassword}
                                            onChange={(e)=>setConfirmNewPassword(e.target.value)} 
                                        />
                                    </div>
                                </div>
                        </div>
                     </div>
                    )}
                    
                </div>
            </div>
        </div>
     );
}
 
export default DoctorSettings;
