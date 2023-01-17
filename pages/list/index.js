
import React from 'react';
import { Button } from 'antd';
import MultilineText from 'components/MultilineText';
import styles from './index.module.less';
import Link, { LinkProps } from 'next/link'
import Layout from 'components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/" scroll={false}>
            <a>123</a>
          </Link>

          <MultilineText className={styles.title} text=" MultilineTextWelcome to" />
          <MultilineText className={styles.title} text=" MultilineTextWelcome to" />
          <MultilineText className={styles.title} text=" MultilineTextWelcome to" />
          <MultilineText className={styles.title} text=" MultilineTextWelcome to" />
          <MultilineText className={styles.title} text=" MultilineTextWelcome to" />
        </main>
      </div>
    </Layout>
  )
}
