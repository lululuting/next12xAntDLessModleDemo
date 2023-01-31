
import App from 'next/app';
import React from 'react';
import _ from 'lodash';
import { ConfigProvider, Button, theme } from 'antd';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion'
import store from '@/store';
import '@/public/styles/global.less';
import 'nprogress/nprogress.css';

export default class MyApp extends App {
  constructor (props) {
    super(props);
    this.state = {
      primaryColor: '#333333',
    };
  }

  componentDidMount () {
    this.setState({ primaryColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() }, ()=>{
      console.log(this.state.primaryColor,123)
    })
  };


  refreshApp = () => {
    this.setState({ primaryColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() }, ()=>{
      console.log(this.state.primaryColor,234)
    })
  }

  render () {
    const { Component, pageProps, router } = this.props;
    pageProps.refreshApp = this.refreshApp
    // const AdminLayout = Component.AdminLayout;
    // console.log(primaryColor)

    return (
     <ConfigProvider
        theme={{
          token: {
            colorPrimary: this.state.primaryColor
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