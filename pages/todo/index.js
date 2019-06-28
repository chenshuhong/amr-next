import React from "react";
import style from './index.less';

export default class extends React.Component{
  static async getInitialProps(){
    return {
      title:'todo'
    }
  }
  render(){
    return (
      <div className={style.example}>todo</div>
    )
  }
}
