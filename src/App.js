import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import {originals, action, comedy, horror, romance, documentaries} from './urls'
import RowPost from './Components/RowPost/RowPost';


function App() {
  let year = new Date().getFullYear()
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"  />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
      
      <h6>Copyright © {year} This Website is made by Sreyas. This site uses TMDB api to provide movie details</h6>
    </div>
  );
}

export default App;
