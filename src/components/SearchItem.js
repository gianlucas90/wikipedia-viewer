import './SearchItem.css';
import React from 'react';

const SearchItem = ({ id, title, snippet }) => {
  const url = `https://en.wikipedia.org/?curid=${id}`;
  return (
    <div className="search-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
      </a>
      <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
    </div>
  );
};

export default SearchItem;
