//集中实例化的函数模式——工厂模式
function createObject(x1, x2) {
    var obj = {
        name: x1,
        age: x2,
        run: function () {
            return this.name + this.age + '运行中...';
        }
    }
    return obj;
}
var box = createObject('miao', 25);
var box2 = createObject('yang', 10);
alert(box.run());
alert(box2.run());

//构造函数
function Box(x1, x2) {
    this.name = x1;
    this.age = x2;
    this.run = function () {
        return this.name + this.age + '运行中...';
    }
}
var box = Box('miao', 25);
