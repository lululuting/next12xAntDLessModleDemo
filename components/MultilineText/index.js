// 多行文本省略 组件
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Typography } from 'antd';
import classNames from 'classnames';
import  styles from './index.module.less';

const MultilineText = ({ className, rows, text, tooltip, ...props }) => {
  return (
    <div className={classNames(styles.multilineText, className)}>
      <Typography.Paragraph
        ellipsis={{
          rows
        }}
        {...props}
      >
        <Tooltip placement="top" title={tooltip ? text : null}>
          {text}
        </Tooltip>
      </Typography.Paragraph>
    </div>
  );
};
export default MultilineText;

MultilineText.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.number,
  text: PropTypes.string.isRequired,
  /**
   * 是否需要 tooltip 提示
   */  
  tooltip: PropTypes.bool
}

MultilineText.defaultProps = {
  className: 'multilineText',
  rows: 2,
  text: '',
  tooltip: false
}