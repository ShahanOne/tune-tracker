
import React from 'react'

const Song = ({title,artist}) => {
  return (
    <div className='shadow-lg rounded-lg p-4'>
        <img src={'/'} alt='poster'/>
        <p className=''>{title}</p>
        <p className=''>{artist}</p>
    </div>
  )
}

export default Song