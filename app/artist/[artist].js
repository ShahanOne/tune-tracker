import ViewArtist from '@/components/ViewArtist';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Artist = () => {
  const router = useRouter();
  const { artist } = router.query;
  const [artistSongs, setArtistSongs] = useState();

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
  return (
    <div className="p-8">
      <ViewArtist name={artist} songs={artistSongs} />
    </div>
  );
};

export default Artist;
