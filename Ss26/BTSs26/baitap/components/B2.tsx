import React from 'react'

function sum(a: number, b: number){
    return a + b;
}

function sub(a: number, b: number){
    return a - b;
}

function mul(a: number, b: number){
    return a * b;
}

function div(a: number, b: number){
    return a / b;
}

export default function B2() {
  return (
    <div>
        <ul>
            <li>10 + 10 = {sum(10,10)}</li>
            <li>10 - 10 = {sub(10,10)}</li>
            <li>10 * 10 = {mul(10,10)}</li>
            <li>10 / 10 = {div(10,10)}</li>
        </ul>
    </div>
  )
}
