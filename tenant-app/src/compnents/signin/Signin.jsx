import React, { useState } from 'react'

export default function Signin() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const [submitted, setSubmitted] = useState(false);

  const handleSumbit = async(e) => {
    console.log("Submit CLicked")
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4000/view'
       },
        body: JSON.stringify({ tenant_name:name , password:password }),
        mode : 'cors'
      };
      const response = await fetch('http://localhost:4000/auth', requestOptions);
      console.log(response)
      setSubmitted(true)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='card p-6 has-text-centered '>
      {
        submitted ?  <>Success</> : 
        <>
        <h1 className='m-4 p-4 has-text-centered'>Sign In</h1>
          <input  classname='input' type="text" name="userName"  value={name}  onChange={(e) => setName(e.target.value)} id="" />
        <br />
        <br/>
        <input classname='input' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="" />
        <br />
        <br />
        <button className="button" onClick={handleSumbit}>Submit</button>
        </>
      }
    </div>
  )
}
