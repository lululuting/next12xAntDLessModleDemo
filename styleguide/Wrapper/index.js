import React from 'react';
import 'antd/dist/antd.css'

function Wrapper({ Component, pageProps, children }) {
  return <div {...pageProps}>{children}</div>;
}

export default Wrapper
