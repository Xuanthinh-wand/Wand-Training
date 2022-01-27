import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

class ListNews extends Component {
  render() {
    let { title, details } = this.props.value;
    return (
      <Link to={`/news-details/${this.props.id}`} id={this.props.id}>
        <div className="group">
          <p className="title"> {title} </p>
          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: details }}
          ></p>
        </div>
      </Link>
    );
  }
}

export default ListNews;
