
import App from 'next/app';
import React from 'react';
import _ from 'lodash';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion'
import store from '@/store';
import '@/public/styles/global.less';
import 'nprogress/nprogress.css';
import 'antd/dist/antd.css';
export default class MyApp extends App {
  componentDidMount () {};
  render () {
    const { Component, pageProps, router } = this.props;
    // const AdminLayout = Component.AdminLayout;
    return (
        <ConfigProvider locale={zh_CN}>
          <Provider store={store}>
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} key={router.pathname}/>
            </AnimatePresence>
          </Provider>
        </ConfigProvider>
    );
  }
}