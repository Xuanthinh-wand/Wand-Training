import React from 'react';
import './productAdmin.scss';
import RowProduct from '../../components/admin/rowProduct';
import Model from '../../components/dialog/model';
export default class ProductAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'add',
            id: '',
            name: '',
            description: '',
            price: '',
            imageUrl: '',
        };
    }

    setStateDefaultValue = () => {
        this.setState(() => ({
            id: '',
            name: '',
            description: '',
            price: '',
            imageUrl: '',
        }));
    };

    handleShowModel = () => {
        const overlay = document.querySelector('.overlay');
        const model = document.querySelector('.model');
        model.classList.add('show');
        overlay.style.display = 'block';
        overlay.addEventListener('click', () => {
            model.classList.remove('show');
            overlay.style.display = 'none';
            this.setStateDefaultValue();
        });
    };

    handleChangeName = (name) => {
        this.setState(() => ({name}));
    };

    handleChangeDesc = (description) => {
        this.setState(() => ({description}));
    };

    handleChangePrice = (price) => {
        this.setState(() => ({price}));
    };

    handleChangeImgUrl = (imageUrl) => {
        this.setState(() => ({imageUrl}));
    };

    handleShowModelAdd = () => {
        this.setState(() => ({type: 'add'}));
        this.handleShowModel();
    };

    handleShowModelEdit = (id) => {
        this.setState(() => ({type: 'edit'}));
        this.handleShowModel();
        const product = this.props.products.find((product) => product.id === id);
        this.setState(() => ({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
        }));
    };

    addProduct = this.props.actions.addProduct;
    editProduct = this.props.actions.editProduct;

    handleAddProduct = () => {
        this.addProduct(this.state.name, this.state.description, this.state.price, this.state.imageUrl);
        this.setStateDefaultValue();
    };
    handleEditProduct = () => {
        this.editProduct(this.state.id, this.state.name, this.state.description, this.state.price, this.state.imageUrl);
        this.setStateDefaultValue();
    };

    render() {
        const {products} = this.props;
        return (
            <section className='admin'>
                <div className='container'>
                    <h2>Quản lý sản phẩm</h2>
                    <button className='btn btn-add' onClick={this.handleShowModelAdd}>
                        Thêm mới sản phẩm +
                    </button>
                    <div className='list-product'>
                        {products.length > 0 ? (
                            <table>
                                <tbody>
                                    <tr className='bg-orange'>
                                        <th>Id</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Mô tả</th>
                                        <th>Giá</th>
                                        <th>Ảnh</th>
                                        <th></th>
                                    </tr>
                                    {products.map((product, index) => {
                                        return (
                                            <RowProduct
                                                key={product.id}
                                                product={product}
                                                stt={index + 1}
                                                handleShowModelEdit={this.handleShowModelEdit}
                                                handleDeleteProduct={this.props.actions.deleteProduct}
                                            />
                                        );
                                    })}
                                </tbody>
                            </table>
                        ) : (
                            <div>Chưa có sản phẩm</div>
                        )}
                    </div>
                </div>
                <Model
                    type={this.state.type}
                    stateName={this.state.name}
                    stateDesc={this.state.description}
                    statePrice={this.state.price}
                    stateImageUrl={this.state.imageUrl}
                    handleAddProduct={this.handleAddProduct}
                    handleEditProduct={this.handleEditProduct}
                    handleChangeName={this.handleChangeName}
                    handleChangeDesc={this.handleChangeDesc}
                    handleChangePrice={this.handleChangePrice}
                    handleChangeImgUrl={this.handleChangeImgUrl}
                />
            </section>
        );
    }
}
