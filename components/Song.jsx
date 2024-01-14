
import Link from 'next/link'
import React from 'react'

const Song = ({title,artist}) => {
  return (
    <div className='shadow-lg rounded-lg p-4 bg-white'>
        <img className='shadow-lg mb-4' src={'/music.jpg'} alt='poster'/>
        <p className=''><Link href={`/song/${title}`}>{title}</Link></p>
        <p className='rounded-full bg-slate-200 text-black text-sm p-2 inline-block'><Link href={`/artist/${artist}`}>{artist}</Link></p>
    </div>
  )
}

export default Song