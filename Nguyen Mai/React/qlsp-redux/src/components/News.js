import { Divider } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, removeData } from "../actions/news";

class News extends Component {
  componentDidMount() {
    this.props.fetchData("https://jsonplaceholder.typicode.com/posts");
  }

  render() {
    const { items } = this.props;
   
    return (
      <>
          <Divider />
          {
              items.map(item=>(
                  <div key={item.id} className="row">
                      <div className="col-11">
                          <strong> {item.title}</strong>
                          <p>{item.body}</p>
                      </div>
                      <div className="col-1">
                          <button onClick={()=>this.props.removeData(item.id)}>X</button>
                      </div>
                      
                  </div>
              ))
          }
          <Divider dashed />
      </>
      )
  }
}
const mapStateToProps = state => {
  return {
    items: state.items.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url)),
    removeData: (id) => dispatch(removeData(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
