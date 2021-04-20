import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'



const Navbar = () => {
    return (
        <div className="flex justify-around p-2 z-10">
            <div className="w-1/2 bg-red-200"><span>logo</span></div>
            <div className="w-1/2 flex justify-around text-xl">
           <Link href='/'><a className="bg-green-50">Home</a></Link> 
           <Link href='/about'><a>About</a></Link> 
           <Link href='/projects'><a>Home</a></Link> 
           </div>
        </div>
    )
}

export default Navbar
