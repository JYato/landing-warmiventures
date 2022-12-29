import React from 'react'
import { TopBar, Footer } from '../../components/Layout'

export const GeneralLayout = ({children}) => {
  return (
    <div>
        <TopBar/>
        {children}
        <Footer/>
    </div>
  )
}
