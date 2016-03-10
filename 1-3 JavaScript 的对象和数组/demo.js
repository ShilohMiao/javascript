//Object类型
//创建对象:
var person = new Object();
person.firstname = "Bill";
person.lastname = "Gates";
person.age = 56;
//字面量方式创建对象;
var person = {
    firstname: "Bill",
    lastname: "Gates",
    age: 56
};
//对象的方法创建;
var box = {
    run: function () {
        return '运行';
    }
}

//方法的访问;
document.write(box.run());
//对象属性的访问;
document.write(person.age);

document.write(person['age']);

//删除对象属性;
delete box.name;

//利用对象向函数传递大量参数;
function box(obj) {
    if (obj.name != undefined) alert(obj.name);
    if (obj.age != undefined) alert(obj.age);
}

box({
    name: 'mlgm',
    age: 26
});

//Array类型
//创建数组:
var box = new Array('喵了个喵', 26, '设计师');
//字面量方式创建数组:
var box = ['喵了个喵', 26, '设计师'];
//获取数组值:
alert(box[0]);
//注意:数组第一个值从0开始标记，以此类推。

//获取元素数量;
alert(box.length);

//强制元素数量;
box.length = 10;

//为数组末尾添加元素;
box[box.length] = 'JS 技术';
