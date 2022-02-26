import React from 'react';
import pic2 from '../pic2.jpg';

export default function User({ user, selectUser }) {
    return (
        <>
        <div className="user_wrapper" onClick={() => selectUser(user)}>
            <div className="user_info">
                <div className="user_detail">
                    <img src={pic2} alt="avatar" className="avatar"/>
                    <h4>{user.name}</h4>
                </div>
                <div className={`user_status ${user.isOnline ? 'online' : 'offline'}`}>

                </div>
            </div>
        </div>
        <div onClick={() => selectUser(user)} className="sm_container" onClick={() => selectUser(user)}>
            <img src={pic2} alt="avatar" className="avatar sm_screen"/>
        </div>
        </>
    );
};