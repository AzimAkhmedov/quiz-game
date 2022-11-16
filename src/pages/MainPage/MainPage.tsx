import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks/typedHooks'
import { decrement, increment } from '../../store/reducers/score/scoreSlice'
// import s from './MainPage.module.scss'
const MainPage:FC = () => {
  const score = useAppSelector((state) => state.score)
  const dispatch= useAppDispatch()
  return (
    <div >

      <Button onClick={()=>{dispatch(increment(100))}} variant="contained" > Start Quiz!</Button>
      <Button onClick={()=>{dispatch(decrement())}} variant="contained" > Minus Quiz!</Button>
      <Button variant="contained" > Plus Quiz!</Button>
      <div>
        {score.score  }
      </div>
    </div>
  )
}

export default MainPage