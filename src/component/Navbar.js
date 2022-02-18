import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch({ search: e.target.value });
    localStorage.setItem('artist', search.search);
  };
  return (
    <divs className="bg-csb-red flex gap-x-5 justify-center items-center py-2">
      <Link to="/">
        <p className="font-bold mt-2 text-lg">Dashboard</p>
      </Link>
      <Link to="/top-artists">
        <p className="font-bold mt-2 text-lg">Top Artists</p>
      </Link>
      <Link to="/top-tracks">
        <p className="font-bold mt-2 text-lg">Top Tracks</p>
      </Link>
      <p className="font-bold mt-2 text-lg">Recommendations</p>
      <div>
        <input
          type="text"
          className="px-3 py-2 rounded"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </divs>
  );
}

export default Navbar;
