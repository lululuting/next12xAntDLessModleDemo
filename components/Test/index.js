// 多行文本省略 组件
import React from 'react';
import { Row, Col } from 'antd';
import  styles from './index.module.less';
const Test = () => {
  return (
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
  );
};
export default Test