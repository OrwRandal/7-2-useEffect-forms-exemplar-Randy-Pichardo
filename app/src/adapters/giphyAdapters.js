import { handleFetch } from './handleFetch.js'
// The path starts from this file's location. Think about how to navigate from here to the file you need. 
import API_KEY from '../../config.js'

const baseUrl = 'https://api.giphy.com/v1/gifs'

export const getTrendingGifs = async () => {
    // We use array destructuring to separate the result. 
    // If the fetch is successful, `data` will hold the response, and `error` will be null.  
    // If there's an error, `error` will hold the error message, and `data` will be null.
    const [data, error] = await handleFetch(`${baseUrl}/trending?api_key=${API_KEY}&rating=g`);

    // Here we check if there was an error. If so, log it and return null.  
    // This way, when we use this function in GifContainer, we can check for null to handle errors properly.
    if(error) {
        console.log(error);
        return null;
    }
    // If there's no error, return the first 3 gifs from the result.
    return data.data.slice(0,3);
}

// This function works the same as `getTrendingGifs`, but instead of trending gifs,  
// it fetches gifs based on the search term provided.
export const getGifsBySearch = async (term) => {
    const [data, error] = await handleFetch(`${baseUrl}/search?api_key=${API_KEY}&q=${term}&rating=g`);
    if(error) {
        console.log(error);
        return null;
    }
    return data.data.slice(0,3);
}