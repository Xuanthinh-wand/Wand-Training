import React, { Component, Fragment } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import About from "../components/view/about/about";
import Login from "../components/view/account/login";
import Register from "../components/view/account/register";
import Footer from "../components/view/footer/footer";
import Home from "../components/view/home/home";
import Menu from "../components/view/menu/menu";
import NewsDetails from "../components/view/news-details/news-details";

import WriteContent from "../components/view/write-content/write-content";
class RouterClient extends Component {
  render() {
    const RouteNewsDetails = () => {
      const params = useParams();
      return <NewsDetails {...{ match: { params } }} />;
    };
    return (
      <Fragment>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/write-content" element={<WriteContent />}></Route>
          <Route path="/news-details/:id" element={<RouteNewsDetails />} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
export default RouterClient;
