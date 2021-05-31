/*
 * nowcoder Pb.02  getUrlParam
    获取 url 中的参数
    1. 指定参数名称，返回该参数的值 或者 空字符串
    2. 不指定参数名称，返回全部的参数对象 或者 {}
    3. 如果存在多个同名参数，则返回数组
    4. 不支持URLSearchParams方法
 */
function getUrlParam(sUrl, sKey) {
    var body = {}
    if (!sUrl.includes('?')) return ''
    sUrl.split('?')[1].split('#')[0].split('&').forEach((item)=>{
        var key = item.split('=')[0]
        var value = item.split('=')[1]
        if (body[key] === undefined) {
            body[key] = value
        } else {
           // if (Object.prototype.toString.call(body[key]).slice(8, -1) === 'Array') {
           //     body[key].push(value)
           // } else {
           //     body[key] = [body[key], value]
           // }
            
           // body[key] = Array.from(body[key]).concat(value)
            
           body[key] = [].concat(body[key], value)
        }
    })
    return sKey === undefined ? body : body[sKey] || ''
}