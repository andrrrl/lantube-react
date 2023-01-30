import React from "react";
import SearchResult from "./SearchResult";

function SearchResults(props: any) {
  return (
    <>
      <div>Search Results</div>
      <ul>
        {props.videos && props.videos.map((video: any, index: number) => (
          <li key={index}>
            <SearchResult video={video} />
          </li>
          ))}
      </ul>
    </>
  );
}

export default SearchResults;
