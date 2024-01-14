'use client';
import ViewArtist from '@/components/ViewArtist';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Artist = () => {
  const path = usePathname();
  const artist = path.split('/').pop();
  const [artistSongs, setArtistSongs] = useState([]);

  const getArtistSongs = async () => {
    try {
      const res = await axios.get(
        `https://tunetrackerserver.cyclic.app/getArtistSongs/${artist}`
      );
      setArtistSongs(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getArtistSongs();
  }, []);
  console.log(artistSongs);
  return (
    <div className="p-8 pb-40 bg-gradient-to-r from-pink-400 to-violet-400">
      {artistSongs && <ViewArtist name={artist} songs={artistSongs} />}
    </div>
  );
};

export default Artist;
