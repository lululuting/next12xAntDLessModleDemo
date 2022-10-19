
import App from 'next/app';
import React from 'react';
import _ from 'lodash';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import { Provider } from 'react-redux';;
import '@/public/style/global.less';
import store from '@/store';
import 'nprogress/nprogress.css';
import 'antd/dist/antd.css'
import '../styles/globals.css'

export default class MyApp extends App {
  componentDidMount () {

  };

  render () {
    const { Component, pageProps } = this.props;

    const AdminLayout = Component.AdminLayout;
    return (
      <ConfigProvider locale={zh_CN}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ConfigProvider>
    );
  }
}