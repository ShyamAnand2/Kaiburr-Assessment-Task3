import React, { useState } from 'react';

interface Props {
  onSearch: (name: string) => void;
  onCreateClick: () => void;
}

const SearchBar: React.FC<Props> = ({ onSearch, onCreateClick }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search.trim());
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar-inner" onSubmit={handleSearch}>
        <input
          className="search-bar-input"
          type="text"
          placeholder="Search tasks by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="search-bar-btn" type="submit">🔍</button>
      </form>
      <button className="search-bar-btn" type="button" onClick={onCreateClick}>+ Create Task</button>
    </div>
  );
};

export default SearchBar;
