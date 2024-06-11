import React from 'react'
import Functional from './components/Functional'
import Class from './components/Class'
import StateFunction from './components/StateFunction'
import StateClass from './components/StateClass'

export default function App() {
  const fullName: string = 'rikkei education'
  const students: string[] = ['lan', 'đào', 'nam', 'thắng']
  return (
    <div>App
      {/* props và state
        1.
      */}

      <Functional name={fullName} students={students}></Functional>
      {/* <Class name={fullName} students={students}></Class> */}
      <StateFunction></StateFunction>
      <StateClass></StateClass>
    </div>
  )
}
