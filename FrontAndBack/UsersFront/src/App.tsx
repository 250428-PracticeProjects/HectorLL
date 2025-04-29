import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Users } from './Components/Users'
import { EditUser } from './Components/EditUser'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/editusers/:id" element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
