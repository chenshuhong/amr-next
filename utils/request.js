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
  let result
  if(!options || !options.url){
    result = Promise.resolve({code: 1, msg: '无效的url：' + options.url, data: null})
  }
  const {method = 'get', data, url,version} = options
  let resultUrl = getResultUrl(url,version);
  switch (method.toLowerCase()) {
    case 'get':
      result = axios.get(resultUrl,{
        params:data
      })
      break
    case 'post':
      result =  axios.post(resultUrl,data)
      break
    case 'put':
      result = axios.put(resultUrl,data)
      break
    case 'delete':
      result = axios.delete(resultUrl)
      break
    default:
      result = Promise.resolve({code: 1, msg: '不支持的请求方式' + method, data: null})
      break
  }
  return result.then(({data:axiosData})=>{
    let {code,msg,data} = axiosData
    if (code === 0){
      return data
    } else {
      notification.open({
        message: msg,
      });
    }
  }).catch(err=>{
    debugger
    notification.open({
      message: err.message,
    });
  })
}

