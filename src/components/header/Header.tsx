import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

import "./Header.scss"
const Header = () => {
    return (
        <div className='folder'>
            <nav>
                <div className="nav-item">
                    <div className="logo">
                        Quiz Time
                    </div>
                </div>
                <div className="nav-item">
                    <input type="text" placeholder='Search...' />
                </div>
                <div className="nav-item">
                    <button>Start Quiz</button>
                </div>
            </nav>

            <aside>
                <NavLink
                    to={"/"}
                    className={isActive =>
                        (!isActive ? "-active" : "")
                    }>
                    <button>Dashboard</button>
                </NavLink>
                <NavLink
                    className={isActive =>
                        (!isActive ? "-active" : "")
                    } to={"/score"}>
                    <button>Your Score</button>
                </NavLink>
            </aside>
        </div>
    )
}

export default Header