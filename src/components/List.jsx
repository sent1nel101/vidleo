import { React, Component } from "react"
import { getMovies, deleteMovie } from "../services/fakeMovieService"
import "../App.css"

class List extends Component {
  state = {
    movies: getMovies(),
  }
  handleDelete = (m) => {
    deleteMovie(m)
    console.log(m)
  }
  render() {
    return (
      <div className="wrapper">
        {this.state.movies.length != 0
          ? `Showing ${this.state.movies.length} movies in the database`
          : "No movies in the database."}
        <table className="table">
          <thead>
            <tr className="flex">
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody id="ulEl">
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <td>
                  <h2 className="col">{m.title}</h2>
                </td>
                <td>
                  <h2 className="col">{m.genre.name}</h2>
                </td>
                <td>
                  <h2 className="col">{m.numberInStock}</h2>
                </td>
                <td>
                  <h2 className="col">{m.dailyRentalRate}</h2>
                </td>
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
    )
  }
}

export default List
