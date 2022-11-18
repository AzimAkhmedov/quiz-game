import React from 'react'
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

        </div>
    )
}

export default Header