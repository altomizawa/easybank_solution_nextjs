'use client'
import React from 'react'

const ButtonGradient = ({name, link}) => {
  return (
    <button className='px-8 py-3 rounded-full text-sm text-neutral-white font-bold bg-gradient-to-r from-primary-green to-primary-cyan hover:opacity-60 duration-300'>{name}</button>
  )
}

export default ButtonGradient
