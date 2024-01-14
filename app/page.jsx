'use client';
import AddSong from '@/components/AddSong';
import Song from '@/components/Song';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Home() {
  const [songs, setSongs] = useState([]);
  const [run,setRun] = useState(true)
  const [addNew,setAddNew] = useState(false)

  const fetchData = async () => {
    try {
      const res = await axios.get('https://tunetrackerserver.cyclic.app/getSongs');
      setSongs(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    setRun(false) //so that the api gets called only once
  }, [run]);

  const addNewSong = (newSong) =>{
setSongs([...songs,newSong])
  }

  return (
    <div className="px-24 py-12 bg-gradient-to-r from-pink-400 to-violet-400">
      <button className='bg-violet-500 text-white rounded p-2' onClick={()=> setAddNew(value => !value)}>Add Song</button>
      {addNew && <AddSong newSong={addNewSong}/>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 py-6'>
   {songs?.map((song, index) => <Song key={index} title={song?.title} artist={song?.artist?.name}/>

      )}
      </div>

   
    </div>
  );
}
