import './SearchList.css';
import React from 'react';
import SearchItem from './SearchItem';

const SearchList = (props) => {
  const articles = props.articles.map((article) => {
    return (
      <SearchItem
        id={article.pageid}
        key={article.pageid}
        title={article.title}
        snippet={article.snippet}
      />
    );
  });

  return <div className="search-list">{articles}</div>;
};

export default SearchList;
