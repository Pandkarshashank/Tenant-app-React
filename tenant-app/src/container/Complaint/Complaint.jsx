import React, { useState,useContext } from 'react'
import { authContext } from "../../compnents/signup/auth"

export default function Complaint() {

  const UserName = useContext(authContext);

  const [ name,setName ] = useState('')
  const [ complaint,setComplaint ] = useState('')
  const [ solved,setSolved ] = useState(false)

  const [submitted, setSubmitted] = useState(false);
 

  const handlePost = async () => {
    setSolved((s)=>false)
    setName((name)=>UserName)
    console.log(name,complaint,solved)
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complaint: complaint , complaint_referer:name , solved:solved })
    };
    const response = await fetch('http://localhost:4000/Complaint', requestOptions);
    console.log(response)
    setSubmitted(true)
    }
    catch(err){
      console.log(err)
    }
}
  return (
      <div>
        {
          submitted ? <>Success!!!</> : 
          <div className='card p-4 m-3 has-text-centered is-flex'>
            <input className='input mr-3' placeholder='Enter Your Complaint' type="text" name="complaint" value={complaint} onChange={(e) => setComplaint(e.target.value)} /><br />
            <button className="button" onClick={handlePost}>Post</button>
          </div>
        }
      </div>
  )
}
