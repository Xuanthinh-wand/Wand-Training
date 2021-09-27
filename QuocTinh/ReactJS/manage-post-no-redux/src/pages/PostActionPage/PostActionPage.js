import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callAPI from '../../utils/apiCaller';

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
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            callAPI(`posts/${id}`, 'GET', null).then(res => {
                // console.log(res.data);
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtIdUser: data.userId,
                    txtTitle: data.title,
                    txtBody: data.body
                })
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
        if (id) {//update
            callAPI(`posts/${id}`, 'PUT', {
                userId: txtIdUser,
                title: txtTitle,
                body: txtBody
            }).then(res => {
                history.goBack();
            })
        } else {//post
            callAPI('posts', 'POST', {
                userId: txtIdUser,
                title: txtTitle,
                body: txtBody
            }).then(res => {
                history.goBack();
            })
        }

    }
    render() {
        var { txtIdUser, txtTitle, txtBody } = this.state;
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

export default PostActionPage;
