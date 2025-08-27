import { useState } from 'react'
import './App.css'
import StudentList from './StudentList'
import ImgUploadForm from './ImgUploadForm'

function App() {
const [selectedId, setSelectedId] = useState(null);
  return (
    <>
    <ImgUploadForm selectedId = {selectedId}  />
     <StudentList setSelectedId={setSelectedId} />
     
    </>
  )
}

export default App
