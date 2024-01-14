import React from 'react'

const ViewSong = ({title,artist}) => {
  return (
    <div className='bg-white rounded p-8 grid grid-cols-2 gap-8'>
        <img src='/music.jpg' alt='poster' className='w-[26rem]'/>
        <div className=''>
<p className='text-black text-xl'>{title}</p>
<p className='text-black'>{artist}</p>
        </div>
    </div>
  )
}

export default ViewSong