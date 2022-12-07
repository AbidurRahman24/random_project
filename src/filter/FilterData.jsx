import React, { useState } from 'react';
import {Users} from './User'

const FilterData = () => {
    const [quary, setQuary] = useState([])
    const keys = ['first_name', 'last_name','email']
    const search = data =>{
        return data.filter((item)=> 
        keys.some((key)=> item[key].toLowerCase().includes(quary))
        // item.first_name.toLowerCase().includes(quary) ||
        // item.last_name.toLowerCase().includes(quary) ||
        // item.email.toLowerCase().includes(quary)
        )
    }
    return (
        <div >
            <input type="text" onChange={(e)=>setQuary(e.target.value)} placeholder='Search....' style={{margin: '5px',padding:'5px',borderRadius:'25px'}}/>
            {
                search(Users).map(user =>
                    <div key={user.id} className='d-flex' style={{display:'flex' ,border: '1px solid green', margin: '5px', padding:'10px', borderRadius:'5px'}}>
                    <li>{user.first_name}</li>
                    <li>{user.last_name}</li>
                    <li>{user.email}</li>
                    
                    </div>
                    
                    
                    )
            }
        </div>
    );
};

export default FilterData;