/**
 * @Author: 陈树鸿
 * @Date: 2019-06-28 11:28
 */
import React from "react";
import { Menu } from 'antd';
import style from './index.less'

export default class AppHeader extends React.Component{
  render(){
    return (
      <div>
        <div className={style.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </div>
    )
  }
}
