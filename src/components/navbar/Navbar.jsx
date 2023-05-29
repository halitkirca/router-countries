import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  //!burada Link yada Navlink ile yol alıp gidilen Home ve About sayfası olacak, ek olarak tıklandığında  github adresinize gidilen bir link te yazınız
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <a href="https://github.com/halitkirca" target='blank'>Github</a>
    </nav>
  );
}

export default Navbar