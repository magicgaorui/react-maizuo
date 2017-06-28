import React,{Component} from 'react';
import { Carousel, WhiteSpace, WingBlank,Icon,NavBar } from 'antd-mobile';
import ProductList from "../../components/ProductList"
import './index.css'

class Home extends React.Component {

// 设置初始的state
  state = {
    data: ['', '', ''],
    initialHeight: 200,
    listData:[]
  }
  componentDidMount() {
    // 模拟数据获取
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);

//获取商品列表的数据
    fetch('/api/recommend/home?page=2&num=20')
    .then(res=>res.json()).then(data=>{
        console.log(data)
        //保存在state里面
        this.setState({
            listData:data.data.list
        })
    })
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
        <div className="home-page">
            
            <Carousel
            className="my-carousel"
            autoplay={false}
            infinite
            selectedIndex={1}
            swipeSpeed={35}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
            >
            {this.state.data.map(ii => (
                <a href="http://www.baidu.com" key={ii} style={hProp}>
                <img
                    src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                    alt="icon"
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({
                        initialHeight: null,
                    });
                    }}
                />
                </a>
            ))}
            </Carousel>
            <ProductList listData={this.state.listData} />
        </div>
    );
  }
}

export default Home

//css 样式冲突，
//1、给页面组件加 class， 把当前页面里面的 class都包起来
//2、css module css样式私有化
