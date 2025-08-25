import { useState } from 'react'
import './App.css'
import StudentList from './StudentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StudentList />
    </>
  )
}

export default App
