import { useState } from "react";
import { SearchVideos } from "../../services/VideosService";
import SearchResults from "./SearchResults";

function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  function handleTerm(event: any) {
    setTerm(event.target.value);
  }

  async function handleSearch(event: any) {
    event.preventDefault();
    setIsSearching(true);
    try {
      const result = await SearchVideos(term);
      setIsLoaded(true);
      setResults(result);
      setIsSearching(false);
    } catch (error: any) {
      setIsLoaded(true);
      setError(error);
      setIsSearching(false);
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded && results) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
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
          <SearchResults videos={results}></SearchResults>
        )}
      </div>
    );
  }
}

export default Search;
