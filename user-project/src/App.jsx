import { useState } from "react"
import axios from 'axios'

function App() {
  let [firstName,setFirstName]=useState('');
  let [lastName,setLastName]=useState('');
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');

  function submitData()
  {
    firstName=document.getElementById('firstName').value
    setFirstName(firstName)
    lastName=document.getElementById('lastName').value
    setLastName(lastName)
    email=document.getElementById('email').value
    setEmail(email)
    password=document.getElementById('password').value
    setPassword(password)
    let data={
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    }
    axios({
      url:'localhost:3000/add/user',
      method:'post',
      data:data

    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

  }

  return (
    <div>
      <h1>Sign Up</h1>
      <table>
        <tr>
          <td>First Name</td>
          <td><input type="text" id="firstName" /></td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td><input type="text" id="lastName" /></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type="text" id="email" /></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type="text" id="password" /></td>
        </tr>
        <tr>
          <button onClick={submitData}> Submit Data</button>
        </tr>
      </table>
    </div>
   
  )
}

export default App
