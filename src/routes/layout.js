import React ,{Component}from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

	class Layout extends Component {
	  constructor(props) {
	    super(props);
	  }
	  render() {
	  	//this.props.params.id 获取地址栏上的参数
	  	//Footer 子组件用属性来接收 myLocationNum
	    return (
	      <div id="wrapper">
	      	<Header />
	      		<div> {this.props.children} </div>
	      	<Footer /> 
	      </div>
	    );
	  }
	}

export default Layout 