import { observable, action } from 'mobx';
import {getData} from '../servicies/index'
class mainStore {
  @observable fileData = [];
  @observable extra = 0;

  @action getInitData = () => {
    getData('read',{},'GET').then(res => {
      this.fileData = res.data.data
    })
  }

  @action updateFile = (dataObj) => {
    let _This = this
    return new Promise(function (resolve, reject) {
      getData('update',dataObj).then((res) => {
        if(res.data.sucsess){
          _This.fileData = res.data.data;
          _This.extra = _This.extra + 1;
          console.log('got data, ',_This.extra)
        }else{
          console.log('Errore, ',res.data.data)
        }
        
        
      })
    })
    
  }
}
export default mainStore;
