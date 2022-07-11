import React from 'react';
import './model.scss';
export default class Model extends React.Component {
    render() {
        const type = this.props.type;
        return (
            <>
                <div className='overlay'></div>
                <div className='model' id='model-add-product'>
                    <div className='title'>{type === 'add' ? 'Thêm mới sản phẩm' : 'Cập nhật sản phẩm'}</div>
                    <div className='form'>
                        <div className='group-item'>
                            <div>Tên sản phẩm: </div>
                            <input
                                id='name'
                                onChange={(e) => this.props.handleChangeName(e.target.value)}
                                value={this.props.stateName}
                                type='text'
                            />
                        </div>
                        <div className='group-item'>
                            <div>Mô tả: </div>
                            <textarea
                                id='desc'
                                onChange={(e) => this.props.handleChangeDesc(e.target.value)}
                                value={this.props.stateDesc}
                                rows='3'
                                type='text'
                            />
                        </div>
                        <div className='group-item'>
                            <div>Giá</div>
                            <input
                                id='price'
                                onChange={(e) => this.props.handleChangePrice(e.target.value)}
                                value={this.props.statePrice}
                                type='number'
                            />
                        </div>
                        <div className='group-item'>
                            <div>Đường dẫn ảnh</div>
                            <input
                                id='imgUrl'
                                onChange={(e) => this.props.handleChangeImgUrl(e.target.value)}
                                value={this.props.stateImageUrl}
                                type='text'
                            />
                        </div>

                        {type === 'add' ? (
                            <button className='btn btn-add' onClick={() => this.props.handleAddProduct()}>
                                Thêm
                            </button>
                        ) : (
                            <button className='btn btn-add' onClick={() => this.props.handleEditProduct()}>
                                Sửa
                            </button>
                        )}
                    </div>
                </div>
            </>
        );
    }
}
