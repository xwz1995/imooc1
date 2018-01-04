import React, { Component } from 'react';
import {Button,List} from 'antd-mobile'
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from './redux'

// import logo from './logo.svg';
// import './App.css';
// import {creatStore} from 'redux';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Imooc</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
function 骑兵连(props){
  return <h2>{props.职位}{props.老大}，冲啊！</h2>
}
class App extends React.Component{
  render(){
    const store = this.props.store;
    const num = this.props.num
    const boss = '李云龙';
    return(
        <div>
          <h2>独立团，团长{boss}现在有机枪{num}把</h2>
          <一营 老大='张大喵'></一营>
          <Button onClick={this.props.addGun}>申请武器</Button>
          <Button onClick={this.props.removeGun}>上缴武器</Button>
          <Button onClick={this.props.addGunAsync}>拖两天执行</Button>
        </div>
    )
  }
}
class 一营 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      solders:['虎子','柱子','王根生']
    }
    // this.addSolder = this.addSolder.bind(this)
  }
  componentWillMount(){
    console.log('组件马上就要加载了')
  }
  componentDidMount(){
    console.log('组件已经加载完毕')
  }
  addSolder(){
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })
  }
  removeSolder(index){
    let delSolders = this.state.solders;
    delSolders.splice(index,1)
    this.setState({
      solders:delSolders
    })
  }
  render(){
    return(
      <div>
        <Button type="primary" onClick={this.addSolder.bind(this)} >新兵入伍</Button>
        <List renderHeader={()=>'士兵列表'}>
            {this.state.solders.map((v,index)=>{
              return(
                <List.Item key={index} onClick={this.removeSolder.bind(this,index)}>
                    {v}
                </List.Item>
              )
            })}
        </List>
      </div>
    )
  }
}
const mapStatetoProps = (state)=>{
  return {num:state}
}
const actionCreators = { addGun, removeGun, addGunAsync}
App = connect(mapStatetoProps,actionCreators)(App)
export default App;
