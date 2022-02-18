import React from 'react'
import { Share } from 'react-feather';

import useSearchTracks from '../hooks/useSearchTracks';
import useTopTracks from '../hooks/useTopTracks';
import Navbar from '../component/Navbar';

function TopTracks() {
    const searchTracks = useSearchTracks({});
    const topTracks = useTopTracks({});
  return (
    <div className="bg-csb-black">
    <Navbar />
    <div className="py-10 px-10">
      <h4 className="text-csb-white pb-3">Top Tracks</h4>
      {searchTracks.length > 1 ? (
        <div className="flex gap-5 flex-wrap justify-center">
          {topTracks.isSuccess
            ? topTracks.data.map((col) => {
                return (
                  <div
                    style={{ width: '250px', height: '400px' }}
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
                    <p className="text-csb-white font-bold whitespace-nowrap">{col.artist}</p>
                    <p className="text-csb-white whitespace-nowrap">
                      Total Listeners: {col.listeners}
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
          {searchTracks.isSuccess
            ? searchTracks.data.track.map((col) => {
                return (
                  <div
                    style={{ width: '250px', height: '400px' }}
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
                    <p className="text-csb-white font-bold whitespace-nowrap">{col.artist}</p>
                    <p className="text-csb-white whitespace-nowrap">
                      Total Listeners: {col.listeners}
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
  )
}

export default TopTracks