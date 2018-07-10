import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
import store from './store/index.js';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];
class App extends Component{
    constructor(props){
        super(props);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.state=store.getState();
        store.subscribe(this.handleStoreChange);
        console.log(  this.state);
    }
    handleInputChange(e){
        // console.log(e.target.value);
        const action={
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(
            store.getState()
        )
        // console.log('StoreChange');
    }
    handleBtnClick(){
        const action={
            type:'add_todo_item',

        }
        store.dispatch(action)
    }
    render(){
        return(
            <div>
            <div style={{marginTop:'10px',marginLeft:'10px'}} >
            <Input  value={this.state.inputValue} onChange={this.handleInputChange} style={{width:'300px',marginRight: '10px',}} />
            <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
            <List
            style={{marginTop:'10px',width:'300px',}}
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
            </div>
            </div>
        )
    }
}
export default App;