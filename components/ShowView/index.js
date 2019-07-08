/**
 * @Author: 陈树鸿
 * @Date: 2019-07-04 10:30
 */
import React from "react";
import { Table,Row,Col,Form,Input,Button } from 'antd';
import request from 'utils/request'
import PropTypes from 'prop-types'
import style from './index.less'

const FormItem = Form.Item
const queryCol = {
  xs: {span: 24},
  md: {span: 12},
  lg: {span: 8},
  xl: {span: 6}
}

const formCol={
  labelCol: {span: 8},
  wrapperCol: {span: 16}
}

class ShowView extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      dataSource:[],
      loading:false,
      querys:props.querys
    }
  }
  
  componentDidMount(){
    this.getDataSource()
  }
  
  getDataSource = async ()=>{
    this.setState({
      loading:true
    })
    let data = await request({
      url:this.props.url,
      version:this.props.version,
    })
    this.setState({
      dataSource:data||[],
      loading:false
    })
  }
  
  updateState=(key,value,cb)=>{
    this.setState({
      [key]:value
    },cb)
  }
  
  resetQuerys=()=>{
    this.updateState('querys',this.props.querys,()=>this.props.form.resetFields())
  }
  
  render(){
    let state = this.state
    let props = this.props
    let {form} = props
    let columns = []
    columns.push({
      title:'序号',
      dtaIndex:'tableIndex',
      key:'tableIndex',
      width:65,
      render:(key,item,index)=>(index+1)
    })
    columns.push(...props.columns)
    return (
      <div>
        {
          state.querys&&state.querys.length&&(
            <Row key='query'>
              {
                state.querys.map(queryItem=>(
                  <Col {...queryCol} key={queryItem.key}>
                    <FormItem {...formCol} label={queryItem.label}>
                      {
                        form.getFieldDecorator(queryItem.key, {
                          initialValue: queryItem.value
                        })
                        (<Input placeholder={'请输入' + queryItem.label} onChange={ e => this.updateState(queryItem.key, e.target.value)}/>)
                      }
                    </FormItem>
                  </Col>
                ))
              }
              <Col {...queryCol} className='talr' style={{float:'right'}}>
                <Form.Item>
                  <Button className='mg1r' type="primary" loading={state.loading} onClick={this.getDataSource}>搜索</Button>
                  <Button onClick={ this.resetQuerys }>重置</Button>
                </Form.Item>
              </Col>
            </Row>)
        }
        <Table
          bordered
          loading={state.loading}
          dataSource={state.dataSource}
          columns={columns}
          rowKey={props.rowKey||'id'}/>
      </div>
    )
  }
}

ShowView.propTypes = {
  //接口地址
  url: PropTypes.string,
  //接口方法，在get,post,delete,put之间
  method:function (props, propName, componentName) {
    let value = props[propName].toLowerCase()
    if (['get','post','put','delete'].indexOf(value)===-1){
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
  //表格的列必须包含title和dataIndex
  columns:PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName){
    let value = propValue[key]
    let keys = ['title','dataIndex']
    keys.map(key=>{
      if (!(key in value)){
        return new Error(
          'Invalid prop `' + propFullName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    })
  }),
  //表格的列必须包含label,key
  querys:PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName){
    let value = propValue[key]
    let keys = ['label','key']
    keys.map(key=>{
      if (!(key in value)){
        return new Error(
          'Invalid prop `' + propFullName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    })
  })
};

ShowView.defaultProps={
  rowKey:'id'
}

export default Form.create()(ShowView)
