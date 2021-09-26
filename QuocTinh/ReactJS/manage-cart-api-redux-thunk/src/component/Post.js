import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Col, Row, Image, Button } from 'antd';

function Post({ post }) {
    let dispatch = useDispatch();
    return (
        <div className="site-card-wrapper">
            <Row gutter={24}>
                <Col span={4}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />

                </Col>
                <Col span={20}>
                    <Card title={post.title} bordered={false}>
                        {post.body}
                    </Card>
                    <Button type="primary">Sửa</Button>
                    <Button type="danger">Xóa</Button>
                </Col>

            </Row>
        </div>

    );
}

export default Post;
