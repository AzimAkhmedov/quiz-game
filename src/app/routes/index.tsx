import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import ScorePage from '../../pages/ScorePage/ScorePage'

const AppRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='score' element={<ScorePage />} />
            </Routes>
        </>
    )
}

export default AppRouters