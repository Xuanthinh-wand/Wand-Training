import React from 'react';
export default class RowProduct extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.imageUrl}</td>
                <td>
                    <button className='btn btn-edit' onClick={() => this.props.handleShowModelEdit(product.id)}>
                        Sửa
                    </button>
                    <button className='btn btn-delete' onClick={() => this.props.handleDeleteProduct(product.id)}>
                        Xoá
                    </button>
                </td>
            </tr>
        );
    }
}
