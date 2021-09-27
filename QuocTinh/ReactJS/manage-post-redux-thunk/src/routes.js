import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostActionPage from "./pages/PostActionPage/PostActionPage";
import PostListPage from "./pages/PostListPage/PostListPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/post-list',
        exact: false,
        main: () => <PostListPage />
    },
    {
        path: '/post/add',
        exact: false,
        main: ({ history }) => <PostActionPage history={history} />
    },
    {
        path: '/post/:id/edit',
        exact: false,
        main: ({ match, history }) => <PostActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }

];
export default routes;