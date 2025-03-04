// Import your adapter functions here
import { getTrendingGifs, getGifsBySearch } from "./adapters/giphyAdapters.js"
import { handleFetch } from "./adapters/handleFetch.js";

const testHandleFetch = async () => {
  const [data, error] = await handleFetch('https://dog.ceo/api/breeds/image/random');
  if (error) {
    return console.log(error);
  }
  console.log(data);
}

// Test your adapter functions here
const testAdapters = async () => {
  const trendingTuple = await getTrendingGifs();
  const searchTuple = await getGifsBySearch('batman');

  console.log(trendingTuple);
  console.log(searchTuple);
}

testHandleFetch();
testAdapters();