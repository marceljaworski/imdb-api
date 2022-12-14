import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react"

export default function MovieCard ({movieId}) {
    const [movie, setMovie] = useState({})
    console.log(movie)
    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=cda52829&i=${movieId}`)
            .then(res => res.json())
            .then(json => {
                if (json.Response === "True")
                    setMovie(json)
                else 
                    setMovie({})
            })
    }, [movieId])
   
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={movie["Poster"]} alt="Card image" />
            <Card.Body>
                <Card.Title>{movie["Title"]}</Card.Title>
                 <Card.Text>{movie["Released"]} - imdbRating: {movie["imdbRating"]}/10</Card.Text>
            </Card.Body>
        </Card>
        
    )
}
