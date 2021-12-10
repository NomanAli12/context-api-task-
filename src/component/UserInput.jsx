import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { DataContext } from '../context/DataProviderContext'
import { Link } from "react-router-dom";



const UserInput = () => {
  const [Username, setUsername] = useState('')
  const [Userpass, setUserPass] = useState('')
  const [Userinterest, setUserInterest] = useState('')
  const [data, setData] = useContext(DataContext)
 
  
  useEffect(()=>{
     if(Username.length > 0 && Userpass.length > 0 && Userinterest.length > 0){
      setData(prevValue =>[...prevValue,{ name: Username, password: Userpass, interest: Userinterest }])
     }    
  },[Username,Userpass,Userinterest])


  console.log('context Data...', data)

  const inputUserHandler = (event) => {
    setUsername(event.target.value)
    console.log(event.target.value)

  }
  const inputPassHandler = (event) => {
    setUserPass(event.target.value)
    console.log(event.target.value)
  }
  const inputInterestHandler = (event) => {
    setUserInterest(event.target.value)
    console.log(event.target.value)
  }
  const onSubmithandler = (e) => {
    e.preventDefault()
    

  }
  return (


    <div style={{ marginTop: '100px' }}>
        <form onSubmit={onSubmithandler}>

          <input type="text" placeholder='User name' name='name'  onChange={inputUserHandler} required /><br />
          <input type="text" placeholder='password' name='pass'  onChange={inputPassHandler} required /><br />
          <input type="text" placeholder='interest' name='interest'  onChange={inputInterestHandler} required /><br />
      <Link to='/welcome'>
          <button>submit</button>
      </Link>
        </form>
    </div>
  )
}

export default UserInput
