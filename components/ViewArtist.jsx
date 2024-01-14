import Link from 'next/link'
import React from 'react'

const ViewArtist = ({name,songs}) => {
  return (
    <div className='bg-white rounded p-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <img src='/music.jpg' alt='poster' className='w-[26rem]'/>
        <div className=''>
<p className='text-2xl text-black mb-2'>{name}</p>
<p className='text-lg text-black'>Songs:</p>
<div className='rounded p-4 bg-slate-200'>
    {songs?.map((song,index)=><p key={index}  className='block text-black'>{song.title}</p>)}

</div>
        </div>
    </div>
  )
}

export default ViewArtist