/**
 * @Author: 陈树鸿
 * @Date: 2019-07-04 14:52
 */
import {notification} from 'antd'
import axios from 'axios'
import config from 'config/config'

axios.defaults.baseURL = config.baseUrl;

function getResultUrl(url,version='v1'){
  return `${version}/${url}`
}

export default function request(options){
  if(!options || !options.url){
    notification.open({
      message: '无效的url',
      description: '请求选项中的url是无效的',
    });
    return Promise.reject({resultCode: 1, resultMsg: '无效的url：' + options.url, data: null})
  }
  const {method = 'get', data, url,version} = options
  let resultUrl = getResultUrl(url,version);
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(resultUrl,{
        params:data
      })
    case 'post':
      return axios.post(resultUrl,data)
    case 'put':
      return axios.put(resultUrl,data)
    case 'delete':
      return axios.delete(resultUrl)
    default:
      return Promise.reject({resultCode: 1, resultMsg: '不支持的请求方式' + method, data: null})
  }
}
