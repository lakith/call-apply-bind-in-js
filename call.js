let obj = {
    num : 3
}

let addTo = function(a){
    return this.num + a
}

console.log(addTo.call(obj,5))
// You can pass any number of arguments but first one should be the object.
// FunctionName.call(obj,function-arguments)


let addToMultiple = function(a,b,c,d,e){
    return this.num + a + b + c + d + e;
}

console.log(addToMultiple.call(obj,5,6,7,8,9))