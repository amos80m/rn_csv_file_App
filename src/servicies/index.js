import axios from 'axios';
import {URL_PREFIX} from '../constants/constants'

export const getData = (op, dataObj, method = 'POST') => {
    let Url = `${URL_PREFIX}/${op}`
    let options = {'Content-Type': 'application/json'};    
    return new Promise(function (resolve, reject) {
        this.callServer(resolve, reject, Url, dataObj, {headers: options},method)
    })
};

callServer = (resolve, reject, Url, dataObj, {headers: options},method) => {
    console.log('URL:',Url)
    console.log('dataObj:',dataObj)
    console.log('method:',method)
    let call;
    switch (method) {
        case 'GET':
            // options = {"Content-Type":"application/json","Token":"Token"}s
            call = axios.get(Url,{headers: options}).then(res => res)
            break;
        default:
            call = axios.post(Url, dataObj, {headers: options}).then(res => res)
            break;
    }
    call.then(res => resolve(res))
};
