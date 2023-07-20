import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link className="navbar-logo">
                <i class="fa-solid fa-a"></i>
                <i class="fa-solid fa-l"></i>
                <i class="fa-solid fa-e"></i>
                <i class="fa-solid fa-l"></i>
                <i class="fa-solid fa-i"></i>
                <i class="fa-solid fa-e"></i>
                <i class="fa-solid fa-r"></i>
            </Link>

            <div className="icon-menu" onClick={handleClick}>
                <div className={click ? 'menu-word-container' : 'menu-word-out'}>
                    <i className='fas fa-times' />
                    <div className='menu-word-container'>
                        <div className='menu-word'>Menu</div>
                        <div className='menu-circle'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-con">
                <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}><div>ABOUT</div></Link>
                </li>
                <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}><div>WORK</div></Link>
                </li>
                <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}><div>NEWS</div></Link>
                </li>
                <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}><div>CONTACT</div></Link>
                </li>
            </ul>
            <div className="button-group">
                <a href="https://www.instagram.com" class="button-soc" target="_blank"><div>Instagram</div></a>
                <a href="https://www.facebook.com" class="button-soc" target="_blank"><div>Facebook</div></a>
                <a href="https://www.Twitter.com" class="button-soc" target="_blank"><div>Twitter</div></a>
                <a href="https://www.linkedin.com" class="button-soc" target="_blank"><div>Linkedin</div></a>
            </div>
            <div className="button-group">
                <a href="https://www.instagram.com" class="button-soc" target="_blank"><div>Stay In Touch</div></a>
                <a href="https://www.facebook.com" class="button-soc" target="_blank"><div>Careers</div></a>
            </div>
        </div>
      </nav>
      </>
    )
  }

  export default NavBar;