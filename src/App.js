import "./App.css";
import Header from "./components/Header.js";
import MovieItem from "./components/MovieItem";
import movies from "./components/MovieDatabase.js";

//let genreAsString = movies.genre.join(" ");

function App() {
  return (
    <div className="App">
      <div id="bg"></div>
      <Header />
      <section>
        {movies.map((item, i) => (
          <MovieItem
            key={i}
            rate={item.rate}
            stars={"./components/img/stars.svg"}
            title={item.title}
            year={item.year}
            director={item.director}
            duration={item.duration}
            genre={item.genre}
          />
        ))}
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
