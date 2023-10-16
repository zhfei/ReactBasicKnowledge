import $ from 'jquery'
import "./css/index.scss"
//发布思路：bundle.js中只存放自己的代码，第三方包的代码都抽离到另外的JS包中

$(function () {
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor','lightblue')
})


class Person {
    static info = {name: 'jack'}
}

console.log(Person.info)
