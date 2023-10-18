import React from "react"

//优化3：将样式对象从一个样式对象文件中导出
import InlineStyles from "./CommentItemStyles.js"

//默认导入的CSS是没有开启模块化的，所以导入的对象时undefined
//使用CSS模块化解决多个css结果互相覆盖的情况
import cssObj from "../../css/commentItem.css"

console.log(InlineStyles)
console.log(cssObj)

//优化1：将样式抽离出来，单独作为变量保存
const itemBorder = {border:'1px solid #ccc', margin:'10px 0', paddingLeft: 15}
const itemH3 = {fontSize: 16, color:"purple"}
const itemP = {fontSize: 14, color: "red"}

//优化2：将所有的样式抽离出来，在对象中统一管理
const inlineStyles = {
    itemBorder : {border:'1px solid #ccc', margin:'10px 0', paddingLeft: 15},
    itemH3 : {fontSize: 16, color:"purple"},
    itemP : {fontSize: 14, color: "red"}
}


//将纯内容展示的部分，抽成函数组件
// 在JSX中设置样式使用的是js的语法， style对应的外层{}表示用js解析，内层{}表示传递的是一个js对象
export default function CommentItem(props) {
    return <div className={cssObj.box}>
        <h3 className={cssObj.title}>姓名：{props.user}</h3>
        <p className={cssObj.content}>内容：{props.content}</p>
    </div>
}




