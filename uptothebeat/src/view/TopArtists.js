import React from 'react';
import { Share } from 'react-feather';

import useTopArtist from '../hooks/useTopArtist';
import useSearchArtists from '../hooks/useSearchArtist';
import Navbar from '../component/Navbar';

function TopArtists() {
  const topArtist = useTopArtist({});
  const searchArtist = useSearchArtists({});

  return (
    <div className="bg-csb-black">
      <Navbar />
      <div className="py-10 px-10">
        <h4 className="text-csb-white pb-3">Top Artist</h4>
        {searchArtist.length > 1 ? (
          <div className="flex gap-5 flex-wrap justify-center">
            {topArtist.isSuccess
              ? topArtist.data.map((col) => {
                  return (
                    <div
                      style={{ width: '250px', height: '350px' }}
                      className="border p-3 flex flex-col gap-y-3 rounded-lg"
                    >
                      <img
                        src={col.image[2]['#text']}
                        alt="artist"
                        className="mx-auto"
                      />
                      <p className="text-csb-white font-bold whitespace-nowrap">
                        {col.name}
                      </p>
                      <p className="text-csb-white whitespace-nowrap">
                        Total Streams: {col.playcount}
                      </p>
                      <div className="flex gap-x-3">
                        <Share className="text-csb-white" />{' '}
                        <a href={col.url}>Share</a>{' '}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        ) : (
          <div className="flex gap-5 flex-wrap justify-center">
            {searchArtist.isSuccess
              ? searchArtist.data.artist.map((col) => {
                  return (
                    <div
                      style={{ width: '250px', height: '350px' }}
                      className="border p-3 flex flex-col gap-y-3 rounded-lg"
                    >
                      <img
                        src={col.image[2]['#text']}
                        alt="artist"
                        className="mx-auto"
                      />
                      <p className="text-csb-white font-bold whitespace-nowrap">
                        {col.name}
                      </p>
                      <p className="text-csb-white whitespace-nowrap">
                        Total Streams: {col.playcount}
                      </p>
                      <div className="flex gap-x-3">
                        <Share className="text-csb-white" />{' '}
                        <a href={col.url}>Share</a>{' '}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default TopArtists;
