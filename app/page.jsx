'use client';
import Song from '@/components/Song';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Home() {
  const [songs, setSongs] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/getSongs');
      setSongs(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      {songs?.map((song, index) => (
        <Song key={index} title={song?.title} artist={song?.artist}/>
      ))}
    </div>
  );
}
