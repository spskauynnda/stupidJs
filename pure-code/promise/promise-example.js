/*
 * Example1: 实现一个timeout，封装一个定时器
 *           传入参数（延迟时间），输出定时器的时长
 * */
// const timeout =(ms)=> {
//     return new Promise(function(resolve, reject) {
//         // setTimeout(function() {
//         //     resolve('success')
//         // }, ms)
//         setTimeout(resolve, ms, 'success')
//     })
// }
//
// const time1 = timeout(2000).then((value) => {
//     console.log(value);
// });

/*
 * Example2: 使用Promise实现Ajax/GET
 *
 * */
// const ajaxGet = function(url) {
//     return new Promise(function(resolve, reject) {
//         const handleStateChange = function () {
//             // readyState生命周期：0 1 2 3 4
//             if (this.readyState !== 4) return
//             if (this.status === 200) {
//                 resolve(this.response)
//             } else {
//                 reject(new Error(this.readyState))
//             }
//         }
//         const xml = new XMLHttpRequest()
//         xml.open('GET', url)
//         xml.setRequestHeader('Accept', 'application/json')
//         xml.onreadystatechange = handleStateChange;
//         xml.responseType = 'json'
//         xml.send()
//     })
// }
//
// const getJson = ajaxGet('./data.json')
// getJson.then(function(json) {
//     console.log(json)
// })
// getJson.catch(function(error) {
//     console.log('Promise Catch:', error)
// })

/*
 * Example3: Promise的嵌套（特殊情况）
 */
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
// })
//
// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// })
//
// p2
//     .then(result => console.log('resolved: ', result))
//     .catch(error => console.log('err: ', error))

/*
 * Example4: Promise.any
 */
// const promise1 = Promise.reject(-1)
// const promise2 = Promise.reject(-4)
//
// const promises = [
//     promise1,
//     Promise.resolve(41),
//     Promise.resolve(42),
//     promise2
// ];
// console.log('Example4...')
// const first = Promise.any(promises);
// first.then(
//     result=>console.log(result),
//     err=>console.log(err)
// )
// promise1.catch(error => console.log(error))
// promise2.catch(error => console.log(error))

// let thenable = {
//     then: function(resolve, reject) {
//         reject(-2);
//     }
// };
//
// let p1 = Promise.resolve(thenable);
// p1.then(function (value) {
//     console.log(value);  // 42
// });
// p1.catch(e=>console.log(e))



/*
 * Example5: Promise.resolve
 */
// const p = Promise.resolve('Hello');
//
// p.then(function (s) {
//     console.log(s)
// });


/*
 * Example6: 错误捕获
 */
// const someAsyncThing = function() {
//     return new Promise(function(resolve, reject) {
//         // 下面一行会报错，因为x没有声明
//         resolve(x + 2);
//     });
// };
//
// someAsyncThing().then(function() {
//     console.log('everything is great');
// });
//
// setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123

/*
 * Example7: ES6手册：“resolve立即执行？”
 */

// const p1 = Promise.resolve(1)
// const p2 = Promise.resolve(p1)
// p1.then(()=> console.log('4, p1'))
// p2.then(()=> console.log('5, p2'))
// const p4 = new Promise(()=>{
//     console.log(1)
// })
// const p6Obj = {
//     then: function(){
//         console.log(6)
//     }
// }
// console.log(2)
// const p3 = new Promise((resolve)=>{
//     console.log(3)
//     resolve(p4)
// })
// const p5 = Promise.resolve(p6Obj)
// Promise.resolve()
//     .then(()=>{
//         console.log(7)
//     })

/*
 * Example8: Try
 */
const f = () => console.log('now');
// (
//     () => new Promise(
//         resolve => resolve(f())
//     )
// )();

Promise.resolve(f()).then(()=>{
    console.log('finally')
})
console.log('next');