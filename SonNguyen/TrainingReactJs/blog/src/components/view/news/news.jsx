import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/news.css";
import ListNews from "./list-new";
import {
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineFastBackward,
  AiOutlineFastForward,
} from "react-icons/ai";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      currentPage: 1,
      newsPerPage: 3,
    };
  }
  componentDidMount() {
    let { posts, newsPerPage } = this.state;
    let lastpage = Math.ceil(posts.length / newsPerPage);
    this.setState({
      lastpage,
    });
  }
  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };
  pre = () => {
    let { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({
        currentPage: --currentPage,
      });
    }
  };
  next = () => {
    let { currentPage, lastpage } = this.state;
    if (currentPage < lastpage) {
      this.setState({
        currentPage: ++currentPage,
      });
    }
  };
  first = () => {
    this.setState({
      currentPage: 1,
    });
  };
  last = (e) => {
    let { currentPage, lastpage } = this.state;
    if (currentPage < lastpage) {
      this.setState({
        currentPage: lastpage,
      });
    }
  };
  changeTitle = (e) => {
    let tle = e.target.value;
    let PostFilter = this.props.posts;
    let filterTitle, filterDetails;
    filterTitle = PostFilter.filter((it) =>
      new RegExp(tle, "i").test(it.title)
    );
    filterDetails = PostFilter.filter((it) =>
      new RegExp(tle, "i").test(it.details)
    );
    let lengthTitle = filterTitle.length;
    let lengthDetails = filterDetails.length;
    if (lengthTitle > 0 || lengthDetails > 0) {
      let filterFilnal = [...filterTitle, ...filterDetails];
      let posts = [...new Set(filterFilnal)];
      this.setState({
        posts,
      });
    }
  };
  render() {
    let { posts, newsPerPage, currentPage, lastpage } = this.state;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentPosts = posts.slice(indexOfFirstNews, indexOfLastNews);
    const renderPosts = currentPosts.map((val, key) => {
      return <ListNews key={key} value={val} id={key} />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= lastpage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="news container">
        <div className="title-h3">
          <h3>Tin tức</h3>{" "}
          <input
            type="text"
            placeholder="Tìm kiếm...."
            onChange={this.changeTitle}
          />
        </div>
        {renderPosts}
        <ul id="page-numbers">
          {currentPage > 1 ? (
            <>
              <li onClick={this.first} className=" btn btn-light">
                <AiOutlineFastBackward></AiOutlineFastBackward>
              </li>
              <li onClick={this.pre} className=" btn btn-light">
                <AiFillStepBackward></AiFillStepBackward>
              </li>
            </>
          ) : (
            ""
          )}

          {pageNumbers.map((number) => {
            if (currentPage === number) {
              return (
                <li key={number} id={number} className="active btn btn-primary">
                  {number}
                </li>
              );
            } else {
              return (
                <li
                  key={number}
                  id={number}
                  onClick={this.chosePage}
                  className="btn btn-light"
                >
                  {number}
                </li>
              );
            }
          })}
          {
            (currentPage = lastpage ? (
              <>
                <li onClick={this.next} className=" btn btn-light">
                  <AiFillStepForward></AiFillStepForward>
                </li>
                <li onClick={this.last} className=" btn btn-light">
                  <AiOutlineFastForward></AiOutlineFastForward>
                </li>
              </>
            ) : (
              ""
            ))
          }
        </ul>
      </div>
    );
  }
}
let mapStateToprops = (state) => {
  return {
    posts: state.post.posts,
  };
};

export default connect(mapStateToprops, null)(News);
