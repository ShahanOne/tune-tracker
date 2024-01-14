'use client';
import ViewSong from '@/components/ViewSong';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const Song = () => {
  const path = usePathname();
  const song = path.split('/').pop();
  const songName = song.split('/').pop().replace(/%20/g, ' ');

  const [songData, setSongData] = useState();

  const getSongData = async () => {
    try {
      const res = await axios.get(
        `https://tunetrackerserver.cyclic.app/getSongData/${song}`
      );
      setSongData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSongData();
  }, []);

  return (
    <div className="p-8 pb-40 bg-gradient-to-r from-pink-400 to-violet-400">
      <ViewSong title={songName} artist={songData?.artist?.name} />
    </div>
  );
};

export default Song;
