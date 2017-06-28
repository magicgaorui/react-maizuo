import React,{Component} from 'react';
import { Icon,NavBar } from 'antd-mobile';
import ListYingpian from "../../components/ListYingpian"
import './index.css'

class List extends React.Component {
	 // 设置初始的state
  state = {
    listData:[]
  }
  componentDidMount() {
    
//获取商品列表的数据
    fetch('/v4/api/film/now-playing?__t=1498572140074&page=1&count=5')
    .then(res=>res.json()).then(data=>{
        console.log(data)
        //保存在state里面
        this.setState({
            listData:data.data.films
        })
    })
  }
  render() {
    
    return (
        <div className="home-page">
                       
            <ListYingpian listData={this.state.listData} />
        </div>
    );
  }
}
export default List
