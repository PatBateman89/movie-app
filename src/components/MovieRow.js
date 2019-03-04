import React from 'react';

class MovieRow extends React.Component {
  viewMovie = () => {
    const url = window.location.href = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.locatoin.href = url
  }

  render() {
    return (
      <div>
        <table key={this.props.movie.id}>
          <tbody>
            <tr>
              <td>
                <img alt="poster" style={{ padding: "5px 5px 0px 5px"}} width="80" src={this.props.movie.poster_src}/>
              </td>
              <td>
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.overview}</p>
                <input
                  type="button"
                  value="View"
                  onClick={this.viewMovie}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default MovieRow;
