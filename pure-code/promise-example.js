/*
 * Example1: 实现一个timeout，封装一个定时器
 *           传入参数（延迟时间），输出定时器的时长
 * */
const timeout =(ms)=> {
    return new Promise(function(resolve, reject) {
        // setTimeout(function() {
        //     resolve('success')
        // }, ms)
        setTimeout(resolve, ms, 'success')
    })
}

const time1 = timeout(2000).then((value) => {
    console.log(value);
});

/*
 * Example2: 使用Promise实现Ajax/GET
 *
 * */
const ajaxGet = function(url) {
    return new Promise(function(resolve, reject) {
        const handleStateChange = function () {
            // readyState生命周期：0 1 2 3 4
            if (this.readyState !== 4) return
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.readyState))
            }
        }
        const xml = new XMLHttpRequest()
        xml.open('GET', url)
        xml.setRequestHeader('Accept', 'application/json')
        xml.onreadystatechange = handleStateChange;
        xml.responseType = 'json'
        xml.send()
    })
}

const getJson = ajaxGet('./data.json')
getJson.then(function(json) {
    console.log(json)
})
getJson.catch(function(error) {
    console.log('Promise Catch:', error)
})

/*
 * Example3: Promise的嵌套（特殊情况）
 */
const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

p2
    .then(result => console.log('resolved: ', result))
    .catch(error => console.log('err: ', error))