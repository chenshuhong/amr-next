import React from "react";
import style from './index.less';
import dynamic from 'next/dynamic'

const HEditor = dynamic(import('components/HEditor'), {
  ssr: false
})
export default class extends React.Component{
  static async getInitialProps(){
    return {
      title:'todo'
    }
  }
  render(){
    return (
      <div className={style.example}>
        <HEditor/>
      </div>
    )
  }
}
