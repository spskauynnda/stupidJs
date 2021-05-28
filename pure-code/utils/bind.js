let objA = {
    name: 'objA'
}
let objB = {
    name: 'objB'
}
objA.sayName = function () {
    return this.name
}
console.log('objA.sayName:', objA.sayName())
/*
    let sayName2 = objA.sayName.bind(objB)
    console.log('sayName2:', sayName2())
*/


// 手写bind
Function.prototype.bind = function(obj) {
    var that = this
    return function() {
        return that.apply(obj, Array.prototype.slice.call(arguments))
    }
}
let sayName2 = objA.sayName.bind(objB)
console.log('sayName2:', sayName2())