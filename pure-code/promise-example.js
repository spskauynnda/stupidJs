/*
 * Example1: 实现一个timeout，封装一个定时器
 *           传入参数（延迟时间），输出定时器的时长
 * */
const timeout =()=> {
    return new Promise(function() {
        setTimeout(function() {

        })
    })
}

const time1 = timeout(100).then((value) => {
    console.log(value);
});