import React from 'react'
import './Profile.css'
import Nav from '../../navigation/Nav'
import Profile from './Profile'
import CreateNew from './CreateNew'

export default function Join() {
  return (
    <div>
        <Nav/>
        <CreateNew className='createIdea'/>
    </div>
  )
}
