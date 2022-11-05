import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MovieCard from './components/MovieCard';
import Button from 'react-bootstrap/Button';


function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

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
          setData(result.Search)
          
        }else {
          throw new Error("Kein data gefunden")
        }
      }catch (error) {
        console.log(error)
      }
    })()
  }

  return (
    <div className="App">
      <div className='searchContainer'>
        <h2>IMDB API</h2>
        <input placeholder=' Film Title' className='input' type="text" value={searchText} onChange={(e) => handleSearch(e)} /><Button variant="warning" onClick={clickHandler}>Search</Button>

      </div>
      {data.length > 0 &&
      <Container>
        <Row>
          {data.map((el, index)=> (
            <Col key={index}>
                <MovieCard movieId={el.imdbID} />
              </Col>
            )
            )}
        </Row>
      </Container>
      } 
      {/* <h3>You found {data.length} movies</h3> */}
    </div>
    
  );
}

export default App;
