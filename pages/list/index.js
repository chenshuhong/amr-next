import React from "react";
import {Table} from 'antd'
import {observer} from 'mobx-react'
import mod from './mod'
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

  componentDidMount() {
    mod.getList()
  }

  columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      render:(key,item,index)=>index+1
    },
    {
      title: '种类',
      dataIndex: 'name',
      key: 'name',
    },
  ]

  render(){
    return (
      <Table dataSource={mod.state.list} columns={this.columns} rowKey={'id'}/>
    )
  }
}
