import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
export class Header extends Component {
    render() {
        return (
            <div className="row">
              <div className="col-md-12">
                  <nav className="navbar  navbar-dark bg-dark ">
                        <ul className="nav">
                            <li className="nav-item" ><Link to="/" className="nav-link active">Products</Link></li>
                            <li className="nav-item"><Link to="/carts" className="nav-link">Carts : {this.props.numberCart}</Link></li>
                            <li className="nav-item"><Link to="/news" className="nav-link">News</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                        </ul>
                  </nav>
              </div>
            </div>
            
        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(Header)
