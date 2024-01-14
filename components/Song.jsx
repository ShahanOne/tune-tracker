
import Link from 'next/link'
import React from 'react'

const Song = ({title,artist}) => {
  return (
    <div className='shadow-lg rounded-lg p-4'>
        <img src={'/music.jpg'} alt='poster'/>
        <p className=''>{title}</p>
        <p className=''><Link href={`/artist/${artist}`}>{artist}</Link></p>
    </div>
  )
}

export default Song