import { useState } from "react";
function GifSearch({setSearchTerm}) {
    // This form is controlled because its value is stored in state (`query`).
    // The input always shows the latest value of `query`.
    // When the user types, `onChange` updates the state with the new value.

    // When the user submits this form, the onSubmit function is invoked
    // This function updates the 'searchTerm' state to the value stored in 'query'
    // In `GifContainer`, whenever `searchTerm` changes, new gifs are fetched.

    //If we wanted to include the bonus to make it update the gifs any time the user types, 
    //we could directly update the 'searchTerm' state, instead of the 'query' 
    const [query, setQuery] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(query)
    }

    return (
        <form value={query} onChange={(e) => setQuery(e.target.value)} onSubmit={onSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch