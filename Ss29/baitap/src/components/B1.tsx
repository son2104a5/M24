import React from 'react'

export default function B1() {
    const Click = () => {
        console.log("Clicked")
    }
  return (
    <div>
        <button onClick={Click}>Click me</button>
    </div>
  )
}
