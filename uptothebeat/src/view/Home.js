import React from 'react';
import { MessageSquare, Play, Share } from 'react-feather';
import { Link } from 'react-router-dom';

import useTopArtist from '../hooks/useTopArtist';
import useTopTracks from '../hooks/useTopTracks';
import Navbar from '../component/Navbar';

import herobanner from '../assets/image/hanny-naibaho-aWXVxy8BSzc-unsplash.jpeg';

function Home() {
  const topArtist = useTopArtist({});
  const topTracks = useTopTracks({});

  return (
    <div className="min-h-screen bg-csb-black">
      <Navbar />
      <div>
        <div className="px-10 bg-csb-red">
          <div className="relative">
            <img
              src={herobanner}
              alt="hero-banner"
              style={{ height: '600px', width: '100%' }}
            />
            <h1 className="text-csb-white absolute bottom-8 inset-x-0 display-1 font-bold left-5">
              Music delivered to you
            </h1>
          </div>

          <div className="flex gap-x-5 py-3">
            <button className="flex border rounded-lg px-3 items-center">
              <span>
                <Play />
              </span>
              Play All
            </button>
            <p className="flex mt-3">
              <span>
                <Share />
              </span>{' '}
              Share
            </p>
            <p className="flex mt-3">
              <span>
                <MessageSquare />
              </span>
              Comment
            </p>
          </div>
        </div>
        <div className="py-10 px-10">
          <div className="flex justify-between">
            <h4 className="text-csb-white">Your Top Tracks</h4>
            <Link to="/top-tracks">
              <p className="text-csb-white">Show All</p>
            </Link>
          </div>
          <div className="flex gap-5 overflow-x-auto">
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
                      <p className="text-csb-white font-bold whitespace-nowrap">
                        {col.artist.name}
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
        </div>
        <div className="py-10 px-10">
          <div className="flex justify-between">
            <h4 className="text-csb-white">Your Top Artist</h4>
            <Link to="/top-artists">
            <p className="text-csb-white">Show All</p>
            </Link>
            
          </div>
          <div className="flex gap-5 overflow-x-auto">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
