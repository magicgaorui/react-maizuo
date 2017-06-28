import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute,browserHistory } from "react-router"; //导入路由
import {Button,Icon,NavBar} from 'antd-mobile'
import Footer from './components/Footer'
import Home from './routes/Home'
import List from './routes/List'
import Cart from './routes/Cart'
import About from './routes/About'
import More from './routes/More'

// fetch("/j/category/").then(res=>res.json()).then(data=>{
//     console.log(data)
// })

var routes = (<Router history={browserHistory}>
	<Route path="/" component={Footer}>
		<IndexRoute component={Home} />
		<Route path="List" component={List} />
		<Route path="Cart" component={Cart} />
		<Route path="About" component={About} />
		<Route path="More" component={More} />
		
	</Route>
</Router>)

//import es6的模块导入语法（必须放在页面的顶部）    
//require commonjs的模块加载器 （可以放在任意位置）
ReactDOM.render(
  routes
, document.getElementById("root"));

