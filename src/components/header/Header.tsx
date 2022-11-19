import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

import "./Header.scss"
const Header = () => {
    const [isActive, setIsActive] = useState("")
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
                <NavLink to={"/"}>
                    <Button color='secondary' variant='contained'>Dashboard</Button>
                </NavLink>
                <NavLink onClick={(isActive) => { }} to={"/score"}>
                    <button>Your Score</button>
                </NavLink>
            </aside>
        </div>
    )
}

export default Header