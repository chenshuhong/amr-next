/**
 * @Author: 陈树鸿
 * @Date: 2019-06-28 10:31
 */
import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import './common.less'
import { Layout } from 'antd';

const {Header, Content, Footer} = Layout;

export default class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    console.log('current pageProps', pageProps)
    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props
    return (<Container>
      <Head>
        <title>{pageProps.title||'白夜'}</title>
        <meta charSet='utf-8'/>
      </Head>
      <Header>
        {pageProps.header || <AppHeader/>}
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>
        {pageProps.footer || <AppFooter/>}
      </Footer>
    </Container>)
  }
}
