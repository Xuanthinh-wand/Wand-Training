import React from 'react';
import './productAdmin.scss';
import RowProduct from '../../components/admin/rowProduct';
import Model from '../../components/dialog/model';
export default class ProductAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'add',
        };
    }

    handleShowModel = () => {
        const overlay = document.querySelector('.overlay');
        const model = document.querySelector('.model');
        model.classList.add('show');
        overlay.style.display = 'block';
        overlay.addEventListener('click', () => {
            model.classList.remove('show');
            overlay.style.display = 'none';
        });
    };

    handleShowModelAdd = () => {
        this.setState(() => ({type: 'add'}));
        this.handleShowModel();
    };

    handleShowModelEdit = () => {
        this.setState(() => ({type: 'edit'}));
        this.handleShowModel();
    };

    render() {
        const {products, actions} = this.props;
        console.log('🚀 ~ file: productAdmin.js ~ line 36 ~ ProductAdmin ~ render ~ actions', actions);
        console.log('🚀 ~ file: productAdmin.js ~ line 37 ~ ProductAdmin ~ render ~ products', products);
        return (
            <section className='admin'>
                <div className='container'>
                    <h2>Quản lý sản phẩm</h2>
                    <button className='btn btn-add' onClick={this.handleShowModelAdd}>
                        Thêm mới sản phẩm +
                    </button>
                    <div className='list-product'>
                        <table>
                            <tbody>
                                <tr className='bg-orange'>
                                    <th>Id</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Mô tả</th>
                                    <th>Ảnh</th>
                                    <th></th>
                                </tr>
                                {products.map((product) => {
                                    return (
                                        <RowProduct
                                            key={product.id}
                                            product={product}
                                            handleShowModelEdit={this.handleShowModelEdit}></RowProduct>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Model type={this.state.type} />
            </section>
        );
    }
}
