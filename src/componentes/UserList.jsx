import React from 'react';
import axios from 'axios';

const UserList = ({person ,selectPerson,getPerson}) => {


const deletePerson=(id)=>{
 axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
 .then(()=>getPerson());
}

    return (
        <div>
            <div className="box_UserList">
                <div className="box_user">
                    <ul>
                        {
                            person.map(person=>(
                                
                                <li className='box_date' key={person.id}>
                                     <div>
                                    <b>{person.first_name} {person.last_name}</b> 
                                   <div className='date'><b>email: {person.email}</b></div>
                                   <div className='date'><b>birthday:{person.birthday}</b></div>
                                </div>
                                <div>
                                    <button className='btn1' onClick={()=>selectPerson(person)}>edit</button>
                                    <button className='btn2' onClick={()=>deletePerson(person.id)}>delete</button>
                                </div>
                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserList;