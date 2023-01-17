
import App from 'next/app';
import React from 'react';
import _ from 'lodash';
import { ConfigProvider, Button, theme } from 'antd';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion'
import store from '@/store';
import '@/public/styles/global.less';
import 'nprogress/nprogress.css';
// import 'antd/dist/antd.css';
export default class MyApp extends App {
  componentDidMount () {};
  render () {
    const { Component, pageProps, router } = this.props;
    // const AdminLayout = Component.AdminLayout;
    console.log(process.browser ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') :  true )
    return (
        <ConfigProvider 
          theme={{
            token: {
              colorPrimary: process.browser ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color') : '#333333'
            },
          }}
        >
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