import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDeletePostRequest, actFetchPostsRequest } from '../../actions/index';
import PostItem from '../../components/PostItem/PostItem';
import PostList from '../../components/PostList/PostList';

class PostListPage extends Component {
    componentDidMount() {
        this.props.fetchAllPosts();
    }
    onDelete = (id) => {
        this.props.onDeletePost(id);
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
        var { posts } = this.props;
        return (
            <div>
                <h1 className="text-center">Quản lý Tin tức</h1>
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
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPosts: () => {
            dispatch(actFetchPostsRequest());
        },
        onDeletePost: (id) => {
            dispatch(actDeletePostRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostListPage);
