&& (
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
            )