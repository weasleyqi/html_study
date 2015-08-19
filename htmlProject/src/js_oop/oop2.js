/**
 * Created by Administrator on 2015/8/19.
 */
(function(){
    function Person(name){
            var _this = {};
            _this.name = name;
            _this.sayHello = function () {
                alert("P hello >> "+_this.name);
            }
        return _this;
    }
    window.Person = Person;
}());

function Teacher(name){
    var _this = Person(name);
    var suSay = _this.sayHello;
    _this.sayHello = function(){
        suSay.call(_this);
        alert("T Hello >>>"+_this.name);
    }
    return _this;
}

var t = new Teacher("weasley");
t.sayHello();