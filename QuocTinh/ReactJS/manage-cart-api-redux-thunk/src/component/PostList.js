import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../redux/action/postAction';
import Post from './Post';

function PostList() {
    const data = useSelector((state) => state.posts.data);
    const posts = useSelector((state) => state);
    const requesting = useSelector((state) => state.posts.requesting);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    return (
        <div>
            <h1 className="text-center m-3">Quản lý tin tức</h1>
            {console.log(posts)}
            <div className="container">
                <div className="row">
                    {data.map((post, index) => {
                        // console.log(post);
                        return <Post key={index} post={post} />
                    })}
                </div>

            </div>
        </div>
    );
}
export default PostList;

