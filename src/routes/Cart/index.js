import React,{Component} from 'react';
import "./index.css"
class Cart extends React.Component {
	constructor(props) {
	    super(props);
	  }
	  render() {
	  	//this.props.params.id 获取地址栏上的参数
	  	//Footer 子组件用属性来接收 myLocationNum
	    return (
	      <div id="wrapper">
	     	 购物车 
	      </div>
	    );
	  }
}
export default Cart