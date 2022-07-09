import React from 'react';
export default class RowProduct extends React.Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>name</td>
                <td>description</td>
                <td>urlImage</td>
                <td>
                    <button className='btn btn-edit' onClick={this.props.handleShowModelEdit}>
                        Sửa
                    </button>
                    <button className='btn btn-delete'>Xoá</button>
                </td>
            </tr>
        );
    }
}
