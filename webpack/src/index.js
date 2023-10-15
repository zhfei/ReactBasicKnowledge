import $ from 'jquery'
import "./css/index.scss"

$(function () {
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor','lightblue')
})


class Person {
    static info = {name: 'jack'}
}

console.log(Person.info)
