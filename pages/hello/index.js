import React from "react";
import Link from 'next/link'
import style from './index.less';

export default class extends React.Component{
  static async getInitialProps(){
    return {
      title:'hello'
    }
  }
  render(){
    return (
      <Link href='/todo'><a className={style.example}>hello</a></Link>
    )
  }
}
