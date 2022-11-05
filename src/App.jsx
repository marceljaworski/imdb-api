import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';



function App() {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  
  console.log(searchText)
  const handleSearch = (e) => {
    const _searchText = e.target.value;
    setSearchText(_searchText)
  }
  const clickHandler = () => {
    (async () => {
      try{
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=cda52829&s=${searchText}`)
        if (response.status === 200) {
          const result = await response.json()
          setData(result)
          console.log(result)
          
        }else {
          throw new Error("Kein data gefunden")
        }
      }catch (error) {
        console.log(error)
      }
    })()

  }
  // const moviesListe = data.map((el)=> <Movies el={el}/>)
  return (
    <div className="App">
      <h2>data IMDB</h2>
      <input type="text" value={searchText} onChange={(e) => handleSearch(e)} /><button onClick={clickHandler}>Search</button>
      {/* <div className='container'>
        {moviesListe}
      </div> */}
    </div>
    
  );
}

export default App;
