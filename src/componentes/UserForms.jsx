import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useForm} from 'react-hook-form'; 


const UserForms = ({getPerson, personSelected,deselectPerson}) => {
    
    // const [first, setFirst] = useState('');
    // const [last, setLast] = useState('');
    // const [email, setEmail] = useState('');
    // const [bth, setBth] = useState('');
    // const [pass, setPass] = useState('');
   

    const{register,handleSubmit,reset} = useForm('');

    useEffect(()=>{
        if(personSelected){
            reset(personSelected)
        }
    },[personSelected])

    const submit=(data)=>{
        if(personSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${personSelected.id}/`,data)
            .then(()=>getPerson());
        }else{
          axios.post('https://users-crud1.herokuapp.com/users/',data)
        .then(()=>getPerson())
        .catch(error=>console.log(error.response));  
        }
        
     clear();   
    } 
    


     const clear=()=>{
        reset({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            birthday:'',
        })
        deselectPerson();
     }


    return (
        <form className='form_container' onSubmit={handleSubmit(submit)}>
            <div className="box_principale">
                <div className="boxfirst_last">
                    <div className='box_first' >
                    <label htmlFor="first"></label>
                    <input
                        placeholder='first name'
                        type="text"
                        id='first'
                        {
                        ...register('first_name')
                        }
                         />
                </div>
                <div className='box_last'>
                    <label htmlFor="last"></label>
                    <input
                        placeholder='last name'
                        type="text"
                        id='last'
                        {...register('last_name') 
                        }
                        />
                </div>
                </div>
                
                <div className='box_email'>
                    <label htmlFor="email"></label>
                    <input
                        placeholder='email'
                        type="email"
                        id='email'
                        {...register('email')
                        }
                        required />
                </div>
                <div className='box_bth'>
                    <label htmlFor="bth"></label>
                    <input

                        type="date"
                        id='bth'
                        {...register('birthday')
                        }
                     />
                </div>
                <div className='box_pass'>
                    <label htmlFor="pass"></label>
                    <input
                        placeholder='password'
                        type="password"
                        id='pass'
                        {...register('password')
                        }
                         />
                </div>
                <button className='bt'>submit</button>
            </div>
        </form>
    );
};

export default UserForms;