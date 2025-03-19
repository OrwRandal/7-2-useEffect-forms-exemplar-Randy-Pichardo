import { useState } from 'react'
import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'

const App = () => {
  //The search term state is declared here at a higher level  
  // so both GifSearch and GifContainer can access and use it.
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch setSearchTerm={setSearchTerm}/>
        <br />
        <GifContainer searchTerm={searchTerm}/>
      </div>
    </div>
  );
}

export default App;
