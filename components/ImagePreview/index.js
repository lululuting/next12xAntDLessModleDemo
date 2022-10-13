/*
 * @Description: 图片预览组件
 */
import React from 'react';
import { Image } from 'antd';
import PropTypes from 'prop-types'
import styles from './style.module.less';

const ImagePreview = ({ className, dataSource, options }) => {
  return (
    <div className={className}>
      <Image.PreviewGroup>
        {_.map(dataSource, (item, index) => (
          <Image
            key={index}
            src={item}
            {...options} />
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

ImagePreview.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.array,
  options: PropTypes.object,
}

ImagePreview.defaultProps = {
  className: styles.box,
  dataSource: [],
  options: {
    width: 100,
    height: 100,
    style: { margin: '0 10px 10px 0' },
  },
};
export default ImagePreview;

