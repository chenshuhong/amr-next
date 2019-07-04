/**
 * @Author: 陈树鸿
 * @Date: 2019-07-04 10:30
 */
import React from "react";
import { Table } from 'antd';
import request from 'utils/request'
import style from './index.less'

class ShowView extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      dataSource:[],
      loading:false,
      
    }
  }
  
  componentDidMount(){
    this.getDataSource()
  }
  
  getDataSource = ()=>{
  
  }
  
  render(){
    let state = this.state
    let columns = []
    columns.push({
      title:'序号',
      dtaIndex:'tableIndex',
      width:65,
      render:(key,item,index)=>(index+1)
    })
    columns.push(...this.props.columns)
    return (
      <div>
        <Table
          bordered
          loading={state.loading}
          dataSource={state.dataSource}
          columns={columns}
          rowKey={this.props.rowKey}/>
      </div>
    )
  }
}

ShowView.defaultProps={
  rowKey:'id'
}

export default ShowView
