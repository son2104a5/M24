import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{
        display: 'flex'
    }}>
        <Link to={'/home'} style={{
            padding: '10px',
            border: '1px solid black'
        }}>Home</Link>
        <Link to={'/about'} style={{
            padding: '10px',
            border: '1px solid black'
        }}>About</Link>
        <Link to={'/contact'} style={{
            padding: '10px',
            border: '1px solid black'
        }}>Contact</Link>
    </div>
  )
}
