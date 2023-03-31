import React, { useState } from 'react'
import Complaint from '../../container/Complaint/Complaint'

export default function Complaints() {

  const [ count, setCount ] = useState([1])

  const [ complaints, setComplaints ] = useState([])

  const handleClick = () => {
    console.log(count)
    setCount((count)=>[...count,1])
  };

  const handleDelete = () => {
    setCount(array => array.filter((item, i)=> i!==(array.length-1)))
  }

  const handleAllDelete = () =>{
    setCount((count) => [])
  }


  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:4000/complaint', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
      setComplaints((complaints)=>data)
    }
    catch (e) {
      console.log(e)
    }
  }

  const handleUnshow = () =>{
    setComplaints((complaints)=>[])
  }

  return (
    
    <div>
      { count ? count.map( item => <Complaint/> ) : null }
      <button className="button p-3 m-3" onClick={handleClick}>Add Complaint</button>
      <button className="button p-3 m-3" onClick={handleDelete}>Delete</button>
      <button className="button p-3 m-3" onClick={handleAllDelete}>Delete All</button>
      <button className='button p-3 m-3' onClick={makeAPICall}>Show Complaints</button>
      <button className='button p-3 m-3' onClick={handleUnshow}>Unshow Complaints</button>
      {
        complaints.length ? complaints.map(item => <div className='card p-5 m-3'>
          Complaint: {item.complaint}
          <br />
          Referer: {item.complaint_referer}
          <br />
          {
            item.solved ? <p>The Problem is Solved</p> : <p>The complaint is not solved yet</p>
          }
        </div>) : null
      }
    </div>
  )
}
