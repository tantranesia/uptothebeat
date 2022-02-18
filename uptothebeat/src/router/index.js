import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../view/Home';
import TopArtists from '../view/TopArtists';
import TopTracks from '../view/TopTracks';

function index() {
  return (
    <div>
      <Router>
        <Routes>
          <Route key={1} exact={true} path={`/`} element={<Home />} />
          <Route
            key={2}
            exact={true}
            path={`/top-artists`}
            element={<TopArtists />}
          />
          <Route
            key={3}
            exact={true}
            path={`/top-tracks`}
            element={<TopTracks />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default index;
