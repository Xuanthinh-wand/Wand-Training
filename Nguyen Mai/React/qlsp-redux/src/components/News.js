import { Divider } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';
import React, { Component } from 'react';
import { actFetchNewsRequest, DeleteNew } from './actions/news';
import {connect} from 'react-redux';
export class News extends Component {
    constructor(props) {
        super(props)
        
    }
 
    componentDidMount(){
        this.props.actFetchNewsRequest();
    }
     
    render() {
        const {_news} = this.props._news;
        if(_news.length>0){
            
           return (
            <>
                <Divider />
                {
                    _news.map((item,index)=>(
                        <div key={index} className="row">
                            <div className="col-11">
                                <strong> {item.title}</strong>
                                <p>{item.body}</p>
                            </div>
                            <div className="col-1">
                                <button onClick={()=>DeleteNew(index)}>X</button>
                            </div>
                            
                        </div>
                    ))
                }
                <Divider dashed />
            </>
            )
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
         
    }
}
 
const mapStateToProps = state =>{
    return {
         _news: state._todoNew,
       };
}
function mapDispatchToProps(dispatch){
    return{
        actFetchNewsRequest:()=>dispatch(actFetchNewsRequest())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(News)


