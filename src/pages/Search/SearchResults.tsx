import React from "react";
import { Video } from "../../interfaces/Video";
import SearchResult from "./SearchResult";

function SearchResults(props: any) {
  function onAddedHandler(video: Video) {
    props.onAdded(video);
  }

  return (
    <>
      <hr />
      <div>Search Results</div>
      <ul className="list-group">
        {props.videos &&
          props.videos.map((video: any, index: number) => (
            <li key={index} className="list-group-item">
              <SearchResult
                video={video}
                onAdded={() => onAddedHandler(video)}
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default SearchResults;
