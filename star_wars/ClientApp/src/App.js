import React, { Component } from "react";
import SideBar from "./components/SideBar";
import MovieInfo from "./components/MovieInfo";

import "./App.css";

export default class App extends Component {
  state = {
    movies: [],
    selectedMovieId: 0,
    isWookiee: false,
    isLoading: false,
  };

  componentDidMount = () => {
    this.setState({isLoading: true})

    fetch("StarWars/Movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Http error " + response.status);
        }
        return response.json();
      })
      .then((movies) => {
        movies = movies.map((movie) => {
          const dateParts = movie.releaseDate.split("-");
          movie.releaseDate =
            dateParts[1] + "/" + dateParts[2] + "/" + dateParts[0];
          return movie;
        });
        this.setState({ movies, isLoading: false });
      });
  };

  setSelectedMovie = (selectedMovieId) => {
    this.setState({ selectedMovieId });
  };

  onClickTranslate = () => {
    let url = "StarWars";
    url += this.state.isWookiee ? "/Movies" : "/Wookiee";

    this.setState({isLoading: true});

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Http error " + response.status);
        }
        return response.json();
      })
      .then((movies) => {
        if (this.state.isWookiee) {
          movies = movies.map((movie) => {
            const dateParts = movie.releaseDate.split("-");
            movie.releaseDate =
              dateParts[1] + "/" + dateParts[2] + "/" + dateParts[0];
            return movie;
          });
          this.setState({ movies, isWookiee: false, isLoading: false });
        } else {
          let wookieeMovies = movies.map((movie) => {
            const dateParts = movie.releaseDate.split("-");
            movie.releaseDate =
              dateParts[1] + "/" + dateParts[2] + "/" + dateParts[0];
            return movie;
          });
          this.setState({ movies: wookieeMovies, isWookiee: true, isLoading: false });
        }
      });
  };

  render() {
    return (
      <>
        <div className="app-container">
          <SideBar
            setSelected={this.setSelectedMovie}
            options={this.state.movies}
            isWookiee={this.state.isWookiee}
            isLoading={this.state.isLoading}
          />
          <MovieInfo
            onClickTranslate={this.onClickTranslate}
            key={this.state.selectedMovieId}
            movie={this.state.movies.find(
              (movie) => movie.episodeId === this.state.selectedMovieId
            )}
            isWookiee={this.state.isWookiee}
            isLoading={this.state.isLoading}
          />
        </div>
      </>
    );
  }
}
