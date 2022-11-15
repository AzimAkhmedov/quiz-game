import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks/typedHooks'

const MainPage = () => {
  const score = useAppSelector((state) => state.score.value)
  const dispathc = useAppDispatch()
  return (
    <div>

      <Button variant="contained" > Start Quiz!</Button>
      <Button variant="contained" > Minus Quiz!</Button>
      <Button variant="contained" > Plus Quiz!</Button>

    </div>
  )
}

export default MainPage