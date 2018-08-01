import React,{Component} from 'react';
import {View,Text,ScrollView,FlatList,TouchableOpacity,TextInput} from 'react-native'
import {inject, observer} from 'mobx-react/native';
import {getLocation} from '../../utilities';
import {exData} from '../../constants/mock'
import Modal from "react-native-modal";
@inject('store') @observer
export default class Dashboard extends Component <Props>{

    constructor(props){
        super(props)
        this.state = {
            isVisible:false,
            selectedItemContent:'',
            SelectedElement:''
        }
        this.props.store.mainStore.getInitData()
    }

    _renderList = () => {
        return <FlatList
        keyExtractor={(item, index) => index.toString()}
        extraData={this.props.store.mainStore.extra}
            data={this.props.store.mainStore.fileData}
            renderItem={({item,index}) => <View key={index} style={{flexDirection:'row'}}>
                             <View style={styles.numberBox}><Text>{ index }</Text></View>
                     {item.map((e,i2)=> this._conTentItem(e,index,i2))
                     }
                   </View>}
        />
        // return this.props.store.mainStore.fileData.length > 0 ? <ScrollView style={{flex:1}}>
                
        //     {this.props.store.mainStore.fileData.map((_,i1) => {
        //        return <View key={i1} style={{flexDirection:'row'}}>
        //                 <View style={styles.numberBox}><Text>{ i1 }</Text></View>
        //         {_.map((e,i2)=> this._conTentItem(e,i1,i2))
        //         }
        //        </View> 
            
        // })}
        // </ScrollView> : null
    }
  
    _conTentItem = (item,i1,i2) => {
        return <TouchableOpacity key={`element_${i2}`}style={styles.contentBox} onPress = {() => this._elementClicked(item,i1,i2)}>
            <Text>{item}</Text>
        </TouchableOpacity>
    }

    _elementClicked = (item,i1,i2) => {
        debugger
        this.setState({
            isVisible:true,
            vals:{"value":item,"row":i1,"column":i2},
            selectedItemContent:item,
            SelectedElement:getLocation(i1,i2)
        })
    }

    _saveOrCancel = (isSave) => {
        if(isSave){
            let {vals,selectedItemContent} = this.state
            vals['value'] = selectedItemContent
            debugger
            this.props.store.mainStore.updateFile(vals)//.then((res)=>{
            //     this.setState({isVisible:false})
            // })
        }
        this.setState({isVisible:false})
    }

    _renderInpit = () => {
        return <Modal isVisible={this.state.isVisible}>
          <View style={styles.modalWrap}>
            <Text style={styles.modalTitle}>Update <Text style={{color:'red'}}>
{this.state.SelectedElement}
            </Text></Text>
            <View style={styles.InputWrap}>
                <TextInput
                autoFocus={true}
                style={styles.inputStyle}
                onChangeText={(selectedItemContent) => this.setState({selectedItemContent})}
                value={this.state.selectedItemContent}
            />
            </View>
            
            <View style={styles.buttonWrap}>
                <TouchableOpacity onPress={() => this._saveOrCancel()} style={[styles.button,{backgroundColor:'#CA5B54'}]}>
                <Text>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._saveOrCancel(true)} style={styles.button}>
                <Text>save</Text>
                </TouchableOpacity>
            </View>
            
          </View>
        </Modal>
    }
    
    render(){
        return<View style={styles.wrap}>
        <View style={{flexDirection:'row'}}>
            <View style={styles.numberBox}><Text>{''}</Text></View>
            <View style={[styles.numberBox,{flex:0.3}]}><Text>{'A'}</Text></View>
            <View style={[styles.numberBox,{flex:0.3}]}><Text>{'B'}</Text></View>
            <View style={[styles.numberBox,{flex:0.3}]}><Text>{'C'}</Text></View>
        </View>
            {this._renderList()}
            {this._renderInpit()}
        </View>
    }
}

const styles = {
    wrap:{flex:1},
    storeDataStyle:{
        color:'#900',
        fontSize:20,
        paddingTop:20
    },
    contentBox:{
        flex:0.3,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderColor:'#999',
        borderBottomWidth:0.5
    },
    numberBox:{
        flex:0.1,
        paddingVertical:15,
        backgroundColor:'#ccc',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#999',
        borderBottomWidth:0.5
    },
    buttonWrap:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    modalWrap:{
        padding:3,
        flex: 0.35,
        backgroundColor:'rgba(255,255,255,.8)',
        justifyContent:'space-around'
     },
    button:{
        backgroundColor:'#4579B2',
        alignItems:'center',
        justifyContent:'center',
        flex:0.45,
        borderWidth:1,
        borderRadius:3,
        borderColor:'#fff',
        paddingVertical:20,

    },
    modalTitle:{
        color:'#000',
        fontSize:20,
        textAlign:'center',
        paddingVertical:20,
    },
    InputWrap:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    inputStyle:{
        height: 50,
        width:100,
        fontSize:18,
        borderColor: '#999', 
        backgroundColor:'#fff',
        borderWidth: 1,
        borderWidth:1,
        borderRadius:3,
        borderColor:'#fff',
        textAlign:'center'
    }
}