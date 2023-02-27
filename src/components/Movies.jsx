import React, { Component } from "react"
import { getMovies } from "../services/fakeMovieService"
import "../App.css"

class Movies extends Component {
  state = {
    movies: getMovies(),
  }
  handleDelete = (m) => {
    const movies = this.state.movies.filter((mov) => mov._id !== m._id)
    console.log(movies)
    this.setState({ movies })
    window.alert(`Deleted ${m.title} from the database`)
  }
  render() {
    return (
      <div className="wrapper">
        {this.state.movies.length !== 0 ? (
          <div>
            <h3 style={{ color: "white" }}>
              Showing {this.state.movies.length} movies in the database.
            </h3>
            <table className="table table-hover table-dark">
              <thead>
                <tr className="flex">
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((m, i) => (
                  <tr className="py-4" key={i}>
                    <td>{m.title}</td>
                    <td>{m.genre.name}</td>
                    <td>{m.numberInStock}</td>
                    <td>{m.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(m)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3 style={{ color: "white" }}>
              There are no movies in the database.
            </h3>
          </div>
        )}
      </div>
    )
  }
}

export default Movies
