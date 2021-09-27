import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa chứ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { post, index } = this.props;
        return (
            <tr>
                <th scope="row">{post.id}</th>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                    <Link to={`post/${post.id}/edit`} className="btn btn-success">Sửa</Link>
                    <button type="button" className="btn btn-danger ms-3" onClick={() => this.onDelete(post.id)}>Xóa</button>
                </td>
            </tr>

        );
    }
}

export default PostItem;
