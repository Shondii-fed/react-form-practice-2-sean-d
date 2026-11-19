import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  return (
    <>
     <FeedbackForm formData={formData} setFormData={setFormData} /> 
    </>
  )
}

export default App
