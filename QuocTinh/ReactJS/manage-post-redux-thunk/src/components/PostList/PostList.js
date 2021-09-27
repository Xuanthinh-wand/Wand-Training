import React, { Component } from 'react';

class PostList extends Component {
    render() {
        return (
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">id_user</th>
                            <th scope="col">title</th>
                            <th scope="col">body</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default PostList;
