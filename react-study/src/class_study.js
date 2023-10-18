console.log('ok')



// 1.构造函数， 创建对象
function Person(name, age) {
    this.name = name;
    this.age = age;
}
//Person.prototype中定义的方法和属性是是定义在当前对象的protoType中的（A区域）
Person.prototype.say = function () {
    console.log('hello')
}
Person.prototype.myId = 220

var p1 = new Person('jack', 12);
console.log(p1);



// 2.类，创建对象, 类的本质也是一个构造方法实现的
class Per {
    //构造器， 调用new方法创建对象时，会调用个constructor
    constructor(name, age){
        this.name = name
        this.age = age
    }
    //es6 定义的方法定义方式，类中的方法也是定义在当前对象的protoType中的（A区域）
    say() {
        console.log('这是Person中的hello方法')
    }

    //class中的static方法和变量，是放在了constructor方法内部的原型对象中（B区域）
    static myId = 230;
    static myIdGet = function () {
        console.log('myIdGet')
    }
}

var p2 = new Per('jack22', 122);
console.log(p2);


// 3.类的重要特性：封装，继承，多态， 
//继承：实现功能的复用
class Chinese extends Per {
    constructor(address, sex, name, age){
        super(name, age)
        this.address = address
        this.sex = sex
    }
}

var c1 = new Chinese('北京', '男', 'jack', 12)
console.log(c1);
Chinese.myIdGet();

//多态：父类中定义一个抽象空方法，不同的子类进行不同的重写实现
class Animal {
    say() {

    }
}
class Dog extends Animal {
    say(){
        console.log("wang wang");
    }
}
class Cat extends Animal {
    say(){
        console.log("miao miao");
    }
}









