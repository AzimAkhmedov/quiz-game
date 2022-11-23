import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks/typedHooks'
import Header from '../../components/header/Header'
import { decrement, increment } from '../../store/reducers/score/scoreSlice'
// import s from './MainPage.module.scss'
const MainPage: FC = () => {
  const score = useAppSelector((state) => state.score)
  const dispatch = useAppDispatch()
  return (
    <div >
      <Header />
      
    </div>
  )
}

export default MainPage