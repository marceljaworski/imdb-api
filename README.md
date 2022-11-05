# Movie DB
In diesem Projekt wollen wir die Open Movie Database API nutzen um nach Filmen zu suchen.

![OMDBAPI](https://drscdn.500px.org/photo/1021917306/m=900/v2?sig=2c4b4b9b6f9005ccb25a5794a89d97243f12ac6bc9fa22eb393a664c0e9c52fe)

## Aufgaben
Arbeitet die Aufgaben in der Reihenfolge ab
### API erkunden
* Holt euch einen API Key um Zugang zu bekommen [API Key](https://www.omdbapi.com/apikey.aspx)
* Schaut euch an, wie die API funktioniert [omdbapi](http://www.omdbapi.com/)
### Web App bauen
* Erstellt eine React app. Entweder mit npx oder mit einem Boilerplate
* Installiert alle Pakete, die ihr nutzen möchtet
* Erstellt eure Components. Hier ein Vorschlag welche Sinn machen: `SearchBar`, `MovieCard`
* Kopiert euch eine Beispiel Response und styled eure Components

```javascript
 {  
   "Title":"Avengers: Endgame",
   "Year":"2019",
   "Rated":"N/A",
   "Released":"26 Apr 2019",
   "Runtime":"N/A",
   "Genre":"Action, Adventure, Fantasy, Sci-Fi",
   "Director":"Anthony Russo, Joe Russo",
   "Writer":"Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",
   "Actors":"Bradley Cooper, Brie Larson, Chris Hemsworth, Chris Evans",
   "Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
   "Language":"English",
   "Country":"USA",
   "Awards":"N/A",
   "Poster":"https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
   "Ratings":[  

   ],
   "Metascore":"N/A",
   "imdbRating":"N/A",
   "imdbVotes":"N/A",
   "imdbID":"tt4154796",
   "Type":"movie",
   "DVD":"N/A",
   "BoxOffice":"N/A",
   "Production":"Marvel Studios",
   "Website":"N/A",
   "Response":"True"
}
```
### Fetch Data
* Nutzt `fetch()` um in eurer Web App Daten von der API zu ziehen
* BEACHTE: Es gibt einen Endpunkt zum Suchen und einen Endpunkt um die ganzen Daten zu bekommen
