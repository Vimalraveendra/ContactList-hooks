import React from "react";


const ContactArray =({dataList})=>{
    dataList= dataList.sort((a,b)=>a.last_name.localeCompare(b.last_name))
    return(
        <div>
        {dataList.map(({id,first_name})=>{
            return<div key={id}>{first_name}</div>
        })}
        </div>
    )
}

export default ContactArray;