import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
      genre
    }
  }
`;

class Booklist extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <ul className="list-group">
          {data.loading ? (
            <h3>Loading books...</h3>
          ) : (
            data.books.map(book => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={book.id}
                >
                  {book.name}
                  <span className="badge badge-primary badge-pill">
                    {book.genre}
                  </span>
                </li>
              );
            })
          )}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(Booklist);
