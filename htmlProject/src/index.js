/**
 * Created by Administrator on 2015/8/18.
 */
function A(){
    this.sayhehe = function(){
        console.log("hehe jikexueyuan");
    };
}

A.prototype.sayHello = function(){
    console.log("hello js");
}

A.sayHi = function(){
    console.log("hello jsaaaa");
}

var a = new A();
a.sayHello();
A.sayHi();

function B (){}
B.prototype = new A();