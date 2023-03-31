import React from 'react'

export default function Tenant(props) {
  console.log('info',props.info)
  return (
    <div className='card m-4 p-6'>
      Name:{props.info.tenant_name}
      <br />
      Flat No: {props.info.flat_no}
    </div>
  )
}
