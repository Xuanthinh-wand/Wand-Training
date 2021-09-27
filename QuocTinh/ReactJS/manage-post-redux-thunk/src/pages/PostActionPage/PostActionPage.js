import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddPostRequest, actGetPostRequest, actUpdatePostRequest } from '../../actions';

class PostActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtIdUser: '',
            txtTitle: '',
            txtBody: ''
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditPost(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        if (nextProps && nextProps.itempost) {
            var { itempost } = nextProps;
            console.log(itempost);
            this.setState({
                id: itempost.id,
                txtIdUser: itempost.userId,
                txtTitle: itempost.title,
                txtBody: itempost.body
            })
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var { id, txtIdUser, txtTitle, txtBody } = this.state;
        var { history } = this.props;
        var post = {
            id: id,
            userId: txtIdUser,
            title: txtTitle,
            body: txtBody
        }
        if (id) {//update
            this.props.onUpdatePost(post);
            history.goBack();
        } else {//post
            this.props.onAddPost(post);
            history.goBack();
        }

    }
    render() {
        var { txtIdUser, txtTitle, txtBody } = this.state;
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.onSave}>
                    <div className="mb-3">
                        <label className="form-label" >UserId</label>
                        <input type="text" className="form-control" name="txtIdUser" value={txtIdUser} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Title</label>
                        <input type="text" className="form-control" name="txtTitle" value={txtTitle} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Body</label>
                        <input type="text" className="form-control" name="txtBody" value={txtBody} onChange={this.onChange} />
                    </div>
                    <Link to="/post-list" className="btn btn-danger me-3">Trở lại</Link>
                    <button type="submit" className="btn btn-primary">Thêm</button>

                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        itempost: state.itempost
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddPost: (post) => {
            dispatch(actAddPostRequest(post));
        },
        onEditPost: (id) => {
            dispatch(actGetPostRequest(id))
        },
        onUpdatePost: (post) => {
            dispatch(actUpdatePostRequest(post))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostActionPage);
