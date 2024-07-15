import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl mb-4">Search for a Book</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter book title, author, or ISBN"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Search</button>
      </form>
      <div className="mt-8">
        <h3 className="text-2xl mb-4">Recent Books</h3>
        {/* Recent books section */}
      </div>
    </div>
  );
}

export default Home;
