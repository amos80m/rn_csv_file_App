import {observable, action} from 'mobx';

import mainStore from './store';


class RootStore {
    constructor() {
        this.mainStore = new mainStore({root: this})
    }
}

export default RootStore;