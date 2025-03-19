import defaultGifs from '../gifs.json';
import { getGifsBySearch, getTrendingGifs } from '../adapters/giphyAdapters';
import { useEffect, useState } from 'react';

const GifContainer = ({searchTerm}) => {
    // This state holds the fetched gifs and updates whenever new gifs are retrieved.
    const [gifs, setGifs] = useState([]);
    // If an error occurs during fetching, this state will store the error message.
    const [errorMessage, setErrorMessage] = useState("");

    // useEffect runs side effects in a component (That's what we call the function inside it).
    // Here, we use it to fetch trending gifs when the page loads  
    // and to refetch gifs whenever `searchTerm` changes (when the user types in the search bar).
    useEffect(() => {
        // We define an async function inside useEffect because useEffect itself cannot be async.
        const doFetch = async () => {
            // If the user has typed a search term, fetch gifs based on that term.
            // Otherwise, fetch the top 3 trending gifs.
            let gifData = searchTerm? await getGifsBySearch(searchTerm): 
            await getTrendingGifs();

            // Handle errors: 
            // If we successfully get data, clear any error message and update the gifs state.
            // If not, show an error message and display default cat gifs.
            if(gifData){
                setErrorMessage('');
                setGifs(gifData);
            } else {
                setErrorMessage("Sorry, the GIPHY API is not working, but here are some cats");
                setGifs(defaultGifs);
            }
        }
        doFetch();
        // Adding `searchTerm` to the dependency array makes it so that this effect runs  
        // whenever `searchTerm` changes, triggering a new fetch.
    }, [searchTerm]);
    return (
        // Inline styles in JSX are applied using an object.  
        // Property names are written in camelCase, and values must be strings.
        <ul style={{display: "flex", flexWrap: "wrap"}}>
            <p style={{color: "red"}}>{errorMessage}</p>

            {/* We map through the `gifs` array, creating an `<li>` for each gif.  
            Each `<li>` needs a unique `key` to help React track changes efficiently.  
            Inside each `<li>`, we display the gif using its image URL. */}
            {gifs.map((gif) => {
                return <li key={gif.id}>
                    <img src={gif.images.original.url}></img>
                </li>
            })}
        </ul>
    )
}

export default GifContainer
