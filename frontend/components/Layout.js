import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className="bg-BACKGROUND h-screen flex flex-col text-DARK box-border">
            <Navbar/>
           {children} 
           
        </div>
    )
}

export default Layout
