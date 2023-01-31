import Head from 'next/head'
import React from 'react';
import { Button, Row, Col } from 'antd';
// import MultilineText from 'components/MultilineText';
import Layout from 'components/Layout';
import Test from 'components/Test';
import styles from '@/public/styles/index.module.less';
import Link, { LinkProps } from 'next/link'
import { motion, useScroll } from "framer-motion"
import Router from 'next/router'

export default function Home(props) {
  const { scrollYProgress } = useScroll();

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0 , y: 20},
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  
  return (
    <Layout>
      <div className={styles.title}>主题色title</div>
      <div className={styles.container}>
        <Head>
          <title>test</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
          <Button onClick={() => {
            localStorage.setItem('theme', 'light'); 
            document.documentElement.setAttribute('theme', 'light')
            props.refreshApp()
          }}>日间</Button>
          <Button type="primary" style={{marginLeft: 10}} onClick={() => {
            localStorage.setItem('theme', 'dark'); 
            document.documentElement.setAttribute('theme', 'dark')
            props.refreshApp()

          }}>黑暗</Button>
        </div>
       
        <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />  
        <main className={styles.main}>
          <Link href="/list" scroll={false}>
            <a>123</a>
          </Link>
          <Test></Test>
          <motion.ul 
            layout
            initial="hidden"
            animate="visible" 
            variants={list}>
              <motion.li variants={variants}>1</motion.li>
              <motion.li variants={variants}>2</motion.li>
              <motion.li variants={variants}>3</motion.li>
              <motion.li variants={variants}>4</motion.li>
              <motion.li variants={variants}>5</motion.li>
              <motion.li variants={variants}>6</motion.li>
          </motion.ul>
        </main>
      </div>
    </Layout>
  )
}
