function GifSearch({searchTerm, setSearchTerm}) {
    // This form is controlled because its value is stored in state (`searchTerm`).
    // The input always shows the latest value of `searchTerm`.
    // When the user types, `onChange` updates the state with the new value.

    // In `GifContainer`, whenever `searchTerm` changes, new gifs are fetched.
    // This means gifs update automatically as the user types.
    return (
        <form value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch