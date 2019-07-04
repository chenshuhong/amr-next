import React from "react";
import Link from 'next/link'
import './index.less' //fix https://github.com/zeit/next-plugins/issues/282

export default class extends React.Component{
  static async getInitialProps(){
    return {
      title:'首页'
    }
  }
  render(){
    return (
      <div className='example'>
        首页
      </div>
    )
  }
}
