import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserForms from './componentes/UserForms'
import UserList from './componentes/UserList'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [person,setPerson]=useState([])
  const [personSelected,setPersonSelected]=useState(null)

  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setPerson(res.data))
  },[])

  const getPerson=()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setPerson(res.data))
  }

const selectPerson=(person)=>{
  setPersonSelected(person)
}

const deselectPerson=()=> setPersonSelected(null);
 console.log(person);
  return (
    <div className="App">
      <UserList 
      person={person} 
      selectPerson={selectPerson} 
      getPerson={getPerson}/>
      <UserForms
       getPerson={getPerson} 
      personSelected={personSelected} 
      deselectPerson={deselectPerson}/>
      
    </div>
  )
}

export default App
