import React from 'react';


const ContactList = ({id,avatar,first_name,last_name,email})=>{
    return(
        <div className='list-container'>
            <div className="image">
            { avatar!==null ?
                <img src={`${avatar}`}alt={`${first_name}`} />
                :<h3>{`${first_name[0]+last_name[0]}`}</h3>
            }
            </div>
                <div className="list-details">
                <h2>{first_name} {last_name}</h2>
                <p>{email}</p>
         </div>
    )
}