import axios from 'axios'
import React, { useState } from 'react'


const AddSong = ({newSong}) => {
const [title,setTitle] = useState('')
const [artist,setArtist] = useState('')

const addSong = async (e) =>{
    e.preventDefault()
    try{
        const res = await axios.post('http://localhost:3001/addSong/',{
            title:title,
            artist:artist
        })
        newSong(res.data);
    }catch(err){
        console.log(err);
    }
}
  return (
    <form onSubmit={addSong} className='flex flex-col gap-2 p-4'>
        <label htmlFor='title'>Title</label>
        <input className='text-black rounded p-2' value={title} onChange={(e)=>setTitle(e.target.value)} id='title'/>
        <label htmlFor='artist'>Artist</label>
        <input className='text-black rounded p-2' value={artist} onChange={(e)=>setArtist(e.target.value)} id='artist'/>
        {(title && artist) && <button type='submit' className='bg-violet-500 text-white rounded p-2'>Add</button>}
    </form>
  )
}

export default AddSong