import React, { Component } from "react";
import Contact from "../contact/contact";
import News from "../news/news";
class Home extends Component {
  render() {
    return (
      <>
        <News />
        <Contact />
      </>
    );
  }
}
export default Home;
