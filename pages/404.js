// pages/404.js
import Head from 'next/head'

import Layout from '../components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <h1>404</h1>
      <p>Not Found</p>
    </Layout>
  )
}
