import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LogIn from './pages/LogIn'
import Community from './pages/Community';
import SignUp from './pages/SignUp';
import Appointment from './pages/Appointment';
import Activities from './pages/Activities';
import Header from './components/Header';



function App() {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/community' element={<Community></Community>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/activities' element={<Activities></Activities>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
