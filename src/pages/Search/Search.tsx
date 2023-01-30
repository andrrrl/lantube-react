import { useState } from "react";
import { SearchVideos } from "../../services/VideosService";
import SearchResults from "./SearchResults";

function Search() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleTerm(event: any) {
    setTerm(event.target.value);
  }

  async function handleSearch(event: any) {
    event.preventDefault();
    try {
      const result = await SearchVideos(term);
      setIsLoaded(true);
      setResults(result);
    } catch (error: any) {
      setIsLoaded(true);
      setError(error);
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded && results) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>Search</h2>
        <form onSubmit={(e: any) => handleSearch(e)}>
          <div className="row">
            <div className="col-6 d-flex justify-content-between">
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
        </form>
        {isLoaded && results && <SearchResults videos={results}></SearchResults>}
      </div>
    );
  }
}

export default Search;
