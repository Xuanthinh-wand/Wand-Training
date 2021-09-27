import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostItem from '../../components/PostItem/PostItem';
import PostList from '../../components/PostList/PostList';
import callAPI from '../../utils/apiCaller';

class PostListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        callAPI('posts', 'GET', null).then(res => {
            this.setState({
                posts: res.data
            })
        })
    }
    onDelete = (id) => {
        var { posts } = this.state;
        callAPI(`posts/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {
                var index = this.findIndex(posts, id);
                if (index !== -1) {
                    posts.splice(index, 1);
                    this.setState({
                        posts: posts
                    })
                }

            }
        })
    }
    findIndex = (posts, id) => {
        var result = -1;
        posts.forEach((post, index) => {
            if (post.id === id) {
                result = index;
            }
        });
        return result;
    }
    render() {
        // var { posts } = this.props;
        var { posts } = this.state;


        return (
            <div>
                <h1 className="text-center">Call API</h1>
                <Link to="/post/add" className="btn btn-primary">Thêm</Link>
                <PostList>
                    {this.showPost(posts)}
                </PostList>
            </div>
        );
    }
    showPost(posts) {
        var result = null;
        if (posts.length > 0) {
            result = posts.map((post, index) => {
                return (
                    <PostItem
                        key={index}
                        post={post}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, null)(PostListPage);
