import React,{Component} from 'react';
//simport { Carousel, WhiteSpace, WingBlank,Icon,,TabBar } from 'antd-mobile';
import {Router,Route,hashHistory,IndexRoute,browserHistory,Link } from "react-router"; //导入路由
import Header from './../Header/index';
import "./index.css"
/* eslint global-require: 0 */

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  render() {
    return (
    	
    	<div>  
    				<Header/>
            {this.props.children}
            <footer class="footer">
					    	<ul>
					    		<li key={0}> <Link href="/"> 电影 </Link></li>
					    		<li key={1}> <Link href="/List">影院</Link></li>
					    		<li key={2}> <Link href="/Cart"> 演出 </Link></li>
					    		<li key={3}> <Link href="/About"> 商城 </Link></li>
					    		<li key={4}> <Link href="/More"> 我的 </Link></li>
					    	</ul>
						</footer>
       </div>
    	
    	
    	
		
    );
  }
}

export default Footer