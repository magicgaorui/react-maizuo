import React,{Component} from "react"
import "./index.css"
//无状态的组件，存组件（views）
const ProductList = function(props){
    //props 给组件传递参数
   // const {listData} = {listdata:[]}//props (结构赋值)
   //props.listData 商品数据
   
    return (
        <div>
            <ul className="product-list">
                {
                    props.listData.map((ele,index)=>{
                        return <li key={index}>
                            <img src={ele.skuList[0].image}/>
                            <p>{ele.masterName}</p>
                        </li>
                    })
                }
             
            </ul>
        </div>
    )
}

export default ProductList