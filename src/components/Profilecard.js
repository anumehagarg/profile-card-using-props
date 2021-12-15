import React from "react";

const Profilecard = ({altname,avatarUrl,name,email,id,onDelete}) =>  {

        const handleDelete = () => {
            if(typeof onDelete)
            onDelete(id);
        }
    
        return (
            <div className="profileCardContainer">
                <div className='back-img'></div>
                <div className="profileAvatar">
                    <img className="avatar"
                        src={avatarUrl}
                        alt={altname}
                    />
                </div>
                <div className="profileDetails">
                        <div className="userName">{name}</div>
                        <div className="userEmail">{email}</div>
                </div>
                <button className='btn' onClick={handleDelete }>Delete</button>
            </div>       
         )
    }
    
    export default Profilecard
