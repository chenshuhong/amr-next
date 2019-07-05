/**
 * @Author: 陈树鸿
 * @Date: 2019-07-02
 */
import {observable,action,runInAction} from 'mobx';
import {getList} from "./serv"

class Mod {
  //将数据设为被观察者，这意味着数据将成为公共数据
  @observable state = {
    list: []
  };

  @action
  async getList() {
    let list = await getList({
      url:"index"
    })
    runInAction(()=> {
      this.state.list = list||[];
    })
  }
}
const mode = new Mod()
export default mode
