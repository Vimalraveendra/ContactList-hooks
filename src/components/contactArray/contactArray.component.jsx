import React from "react";
import ContactList from "../contactArray/contactArray.component"


const ContactArray =({dataList})=>{
    console.log('data2',dataList)
    dataList= dataList.sort((a,b)=>a.last_name.localeCompare(b.last_name))
    return(
        <div>
        {dataList.length>0 && dataList.map(({id,...otherContactList})=>{
            return<ContactList key={id} {...otherContactList} />
        })}
        </div>
    )
}

export default ContactArray;