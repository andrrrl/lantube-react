import { useContext, useState } from "react";
import { Video } from "../../interfaces/Video";
import ToastContext from "../../store/toast-context";
import VideosContext from "../../store/videos-context";
import SearchResults from "./SearchResults";

function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const videosCtx = useContext(VideosContext);
  const toastCtx = useContext(ToastContext);

  function handleTerm(event: any) {
    setTerm(event.target.value);
  }

  function handleSearch(event: any) {
    event.preventDefault();

    setIsSearching(true);
    try {
      videosCtx.searchVideos(term).then((result: any) => {
        setIsLoaded(true);
        setResults(result);
        setIsSearching(false);

      });
    } catch (error: any) {
      setIsLoaded(true);
      setError(error);
      setIsSearching(false);
    }
  }

  function onAddHandler(video: any) {
    toastCtx.showToast({
      title: 'Video Added!',
      subtitle: `Duration: ${video.duration}`,
      body: `Title: ${video.title}`
    });
  }

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded && results) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="text-light">
        <h2>Search & Add</h2>
        <form className="form" onSubmit={(e: any) => handleSearch(e)}>
          <div className="row">
            <div className="col-6">
              <label htmlFor="search" className="form-label">
                Search videos
              </label>
              <div className="d-flex justify-content-between">
                <input
                  type="search"
                  className="form-control"
                  name="search"
                  id="search"
                  value={term}
                  onChange={(e: any) => handleTerm(e)}
                />
                <button
                  type="submit"
                  className="btn btn-primary ms-2"
                  onClick={(e: any) => handleSearch(e)}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        {isSearching && <div className="searching">Searching...</div>}
        {isLoaded && results && (
          <SearchResults videos={results} onAdded={(video: Video) => onAddHandler(video)}></SearchResults>
        )}
      </div>
    );
  }
}

export default Search;
