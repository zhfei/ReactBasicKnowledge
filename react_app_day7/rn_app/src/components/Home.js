import React, {Component, Fragment} from 'react'

import ImgChuanShuo from '../asserts/chuanshuo.jpg'
export default class Home extends Component {
    render() {
        return (
            //在HTML的body中，包裹<div>出现在了页面中
//            <div>
//                <div>这是一个自定义组件</div>
//                <div>这是一个自定义组件2</div>
//            </div>


            //在HTML的body中，不出现包裹<div>，直接是中间的内容div
            <Fragment>
                <div>这是一个自定义组件</div>
                <div>这是一个自定义组件2</div>
                <img src="earth.jpg" alt=""/>
                <div><img src={ImgChuanShuo} alt=""/></div>
                <div><img src={require('../asserts/chuanshuo.jpg')} alt=""/></div>
            </Fragment>
        )
    }
}