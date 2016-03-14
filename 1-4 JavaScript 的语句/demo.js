//if语句:
var d = new Date().getDay();

function myFunction() {
    if (d == 6 || d == 0) {
        document.getElementById('demo').innerHTML = '今天是双休日！可以好好休息哦～';
    } else {
        document.getElementById('demo').innerHTML = '工作日就安心上班吧！';
    }
}

//switch语句:
function myFunction_2() {
    switch (d) {
        case 0:
            document.getElementById('demo_2').innerHTML = '今天是双休日！可以好好休息哦～';
            //break用于防止语句穿透
            break;
        case 6:
            document.getElementById('demo_2').innerHTML = '今天是双休日！可以好好休息哦～';
            break;
            //default 关键词用来规定匹配不存在时做的事情，类似else
        default:
            document.getElementById('demo_2').innerHTML = '工作日就安心上班吧！';
    }
}

//for语句:
function myFunction_3() {
    var y = 0,
        x = 0;
    for (; x < 6; x++) {
        y = y + x + "<br>";
    }
    document.getElementById('demo_3').innerHTML = y;
}

//for(in) 语句:
function myFunction_5() {
    var y = " ",
        person = [5, 6, 7, 8, 9, 0];
    for (x in person) {
        y = y + person[x] + '<br>';
    }
    document.getElementById('demo_5').innerHTML = y;

}

//while语句:
function myFunction_6() {
    var x = 0,
        y = "";
    while (x < 5) {
        y = y + x + "<br>";
        x++;
    }
    document.getElementById('demo_6').innerHTML = y;
}

//do/while语句:
function myFunction_7() {
    var x = 6,
        y = " ";
    //与while 语句的区别是先循环再判断
    do {
        y = y + x + "<br>";
        x++;
    } while (x < 5);
    document.getElementById('demo_7').innerHTML = y;
}

//continue语句:跳过特定循环;
function myFunction_8() {
    var x = 0,
        y = "";
    for (; x < 10; x++) {
        if (x == 2) continue;
        y = y + x + "<br>";
    }
    document.getElementById('demo_8').innerHTML = y;
}

//with语句:指定作用域;
var shilohmiao = {
    x1: '苗',
    x2: '了个',
    x3: '喵'
};
with(shilohmiao) {
    var a = x1,
        b = x2,
        c = x3;
    alert(a);
};
