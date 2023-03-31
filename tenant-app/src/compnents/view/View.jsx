import React, { useState } from 'react'
import {Tenant} from '../../container/exports'

export default function View() {

  const [ tenant,setTenant ] = useState([])
  const [ errmsg, setErr ] = useState('')

  const handleShow = async () => {
    try {
      const response = await fetch('http://localhost:4000/view', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
      setTenant((tenant) => data)
    }
    catch (e) {
      console.log(e)
      setErr((err)=>"API Failed")
    }
  }

  const handleUnshow = () => {
    setTenant((tenant) => [])
  }

  return (
    <div className='has-text-centered p-6 m-6'>
      {
        tenant.length ? tenant.map(item => <Tenant info={item}/>) : null
      }
      
      {
        errmsg ? <div className='card has-text-centered p-3 m-4'>{errmsg}</div> : null
      }
      
      <button className="button m-4" onClick={handleShow}>Show Tenant</button>
      <button className="button m-4" onClick={handleUnshow}>Unshow Tenant</button>
    </div>
  )
}
