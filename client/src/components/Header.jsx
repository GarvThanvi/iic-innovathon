import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/community"}>Community</Link>
      <Link to={"appointment"}>Schedule an Appointment</Link>
      <Link to={"/activities"}>Wellness Activites</Link>
      <Link to={'/login'}>LogIn/SignUp</Link>
    </nav>
  )
}
