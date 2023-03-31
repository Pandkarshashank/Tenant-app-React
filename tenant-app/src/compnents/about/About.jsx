import React from 'react'
import facebook from '../../asssets/facebook.png'
import instagram from '../../asssets/instagram.png'
import github from '../../asssets/github.png'

export default function About() {
  return (
    <div >
      <ul>
        <li className='icon icon is-large fas fa-2x p-1 mt-6 ml-4 mr-3'><a href="https://www.facebook.com/shashank.pandkar.5"><img src={facebook} alt="" /></a></li>
        <li className='icon icon is-large fas fa-2x p-1 mt-6 ml-4 mr-3'><a href="https://www.instagram.com/mockingjay2612/"><img src={instagram} alt="" /></a></li>
        <li className='icon icon is-large fas fa-2x p-1 mt-6 ml-4 mr-3'><a href="https://github.com/Pandkarshashank"><img src={github} alt="" /></a></li>
      </ul>
    </div>
  )
}
