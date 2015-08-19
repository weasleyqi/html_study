/**
 * Created by weasleyqi on 8/19/15.
 */

(function(){
    function People(name){
        this.name = name;
    }
    People.prototype.say = function (){
        alert("hello"+this.name);
    }
    window.People = People;
}())

function Student (name){
    this.name = name;
}

Student.prototype = new People();
var supSay = Student.prototype.say;//获取父类的say方法

Student.prototype.say = function (){//复写say方法
    supSay.call(this);
    alert("Hi "+this.name);
}

var s = new Student("weasley");
s.say();