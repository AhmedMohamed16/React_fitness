import './navbar.css'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
        <div className='container nav__container'>
            {/* Logo  */}
            <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
                <img src={Logo}  alt="logo" />
            </Link>
            {/* links  */}
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav': ''} onClick={() => setIsNavShowing((prev) => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>  
            {/* buttons  */}
            <button className='nav__toggle-btn' onClick={() => setIsNavShowing((prev) => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                 }
            </button>
        </div>
    </nav>
  )
}

export default Navbar