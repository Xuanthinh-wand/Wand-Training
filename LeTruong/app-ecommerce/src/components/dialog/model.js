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
                            <input type='text' />
                        </div>
                        <div className='group-item'>
                            <div>Mô tả: </div>
                            <textarea rows='3' type='text' />
                        </div>
                        <div className='group-item'>
                            <div>Đường dẫn ảnh</div>
                            <input type='text' />
                        </div>
                        <button className='btn btn-add'>{type === 'add' ? 'Thêm +' : 'Sửa'}</button>
                    </div>
                </div>
            </>
        );
    }
}
