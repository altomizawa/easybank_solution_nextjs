'use client'

import Image from 'next/image'
import Link from 'next/link'
import './Navbar.css'
import { useState } from 'react'
import ButtonGradient from '../ui/ButtonGradient'

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  return (
    // DESKTOP DESIGN //
    <div className='z-50'>
      <div className='hidden md:flex justify-around items-center h-20 bg-white'>
        <Image src='/images/logo.svg' width={150} height={150} alt='logo' />
        <nav className='space-x-8'>
          <Link className='navbar__link' href='/'>Home</Link>
          <Link className='navbar__link' href='/'>About</Link>
          <Link className='navbar__link' href='/'>Contact</Link>
          <Link className='navbar__link' href='/'>Blog</Link>
          <Link className='navbar__link' href='/'>Careers</Link>
        </nav>
        <ButtonGradient name='Request Invite' link='/' />
      </div>

      {/* MOBILE DESIGN */}
      <div className='flex md:hidden justify-between px-8 items-center h-20 bg-white'>
        <Image src='/images/logo.svg' width={150} height={150} alt='logo' />
        {isMenuActive ? <Image src='/images/icon-close.svg' width={30} height={30} alt='hamburger menu' onClick={() => setIsMenuActive(false)} /> : <Image src='/images/icon-hamburger.svg' width={30} height={30} alt='hamburger menu' onClick={() => setIsMenuActive(true)} />}
       
        {/* <button className='px-8 py-3 rounded-full text-neutral-white font-bold bg-gradient-to-r from-primary-green to-primary-cyan hover:opacity-60 duration-300'>Request Invite</button> */}
      </div>
      {isMenuActive && <div className='md:hidden absolute w-screen h-screen bg-[rgba(0,0,0,0.1)]'>
          <nav className='bg-white flex flex-col gap-8 items-center justify-center mt-8 mx-8 py-8 rounded-lg'>
            <Link className='navbar__link_mobile' href='/'>Home</Link>
            <Link className='navbar__link_mobile' href='/'>About</Link>
            <Link className='navbar__link_mobile' href='/'>Contact</Link>
            <Link className='navbar__link_mobile' href='/'>Blog</Link>
            <Link className='navbar__link_mobile' href='/'>Careers</Link>
          </nav>
        </div>}
    </div>
    // MOBILE DESIGN //
  )
}

export default Navbar
