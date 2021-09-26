import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePOST } from '../redux/action/postAction';

function Post({ post }) {
    let dispatch = useDispatch();
    return (
        <div className="container card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://i1-thethao.vnecdn.net/2021/09/18/carlsen-jpeg-1631950371-5886-1631950456.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=EH2Nw8jJ8jl1cGZ9kKSn3g" className="img-fluid rounded-start w-100 h-100" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="d-flex justify-content-end align-items-end">
                        <button type="button" className="btn btn-success mx-3">Sửa</button>
                        <button type="button" className="btn btn-danger">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
