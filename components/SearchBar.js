import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Add actual search logic here
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Cerca un servizio o zona..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-r-md hover:bg-primary-dark transition-colors"
        >
          Cerca
        </button>
      </form>
    </div>
  );
}