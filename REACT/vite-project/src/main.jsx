import React from 'react'
import ReactDOM from 'react-dom/client'

// Import All 3 Experiments
import Exp7Student from './Exp7'
import Exp8Counter from './Exp8'
import Exp9Register from './Exp9'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Change the number below to run different experiment
// 7 = Student Info, 8 = Counter, 9 = Registration Form
const currentExp = 8;   

root.render(
  <React.StrictMode>
    {currentExp === 7 && <Exp7Student />}
    {currentExp === 8 && <Exp8Counter />}
    {currentExp === 9 && <Exp9Register />}
  </React.StrictMode>
)