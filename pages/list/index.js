import React from "react";
import {observer} from 'mobx-react'
import ShowView from 'components/ShowView'
import mod from './mod'
import style from './index.less'
/**
 * @Author: 陈树鸿
 * @Date: 2019-07-01 11:47
 */
@observer
export default class extends React.Component{
  static async getInitialProps(){
    return {
      title:'list',
    }
  }

  columns = [
    {
      title: '种类',
      dataIndex: 'name',
    },
  ]
  
  querys = [
    {
      label:'名称',
      key:'name',
      type:'input',
    }
  ]

  render(){
    let params = {
      url: `category`,
      method: 'GET',
      columns:this.columns,
      querys:this.querys
  }
    return (
      <div className='pd2'>
        <ShowView {...params}/>
      </div>
    )
  }
}
