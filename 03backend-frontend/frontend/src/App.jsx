import { useState } from 'react'
import './App.css'
import StudentList from './StudentList'
import ImgUploadForm from './ImgUploadForm'
import UploadMultipleImages from './uploadMultipleImages';

function App() {
const [selectedId, setSelectedId] = useState(null);
  return (
    <>
    <ImgUploadForm selectedId = {selectedId}  />
     <StudentList setSelectedId={setSelectedId} />
     <UploadMultipleImages/>     
    </>
  )
}

export default App
