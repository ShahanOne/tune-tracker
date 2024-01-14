'use client';
import ViewSong from '@/components/ViewSong';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const Song = () => {
  const path = usePathname();
  const song = path.split('/').pop();

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
    <div className="p-8">
      <ViewSong title={song} artist={songData?.artist} />
    </div>
  );
};

export default Song;
