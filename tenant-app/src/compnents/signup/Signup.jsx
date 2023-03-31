import React from 'react'
import { useState  } from 'react';
import { authContext } from './auth';

function generatePassword() {
  var length = 5,
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

export default function Signup() {

  const [name, setName] = useState('');
  const [flat_no, setFlat_no] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setFlat_no(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = async (e) => {
    setPassword( (password) => generatePassword())
    e.preventDefault();
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4000/view'
       },
        body: JSON.stringify({ tenant_name:name,flat_no:flat_no,password:password }),
        mode : 'cors'
      };
      const response = await fetch('http://localhost:4000/view', requestOptions);
      console.log(response)
      setSubmitted(true)
    }
    catch(err){
      console.log(err)
    }
  };

  return (
    <div className="form">
      <div className='card is-mobile m-4 p-3'>
      {
        submitted ? <>Success</> : 
        <div className='m-4 p-4 has-text-centered'>
          <h1>User Registration</h1>
          <form className='form m-4 p-2'>
            <br />
            {/* Labels and inputs for form data */}
            <authContext.Provider value={{ username: name}}>
            <input onChange={handleName} className="input"
              value={name} type="text" placeholder='Enter Username'/>
            </authContext.Provider>
            <br />
            <br />

            <input onChange={handleEmail} className="input"
              value={flat_no} type="number"  placeholder='Enter Flat Number' />

            <br />
            <br />
            <button onClick={handleSubmit} className="button" type="submit" >
              Submit
            </button>
          </form>      
        </div>
      }
    </div>
    </div>
  );
}
