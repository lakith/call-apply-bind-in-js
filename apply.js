let obj = {
    num : 3
}

let addToMultiple = function(a,b,c,d,e){
    return this.num + a + b + c + d + e;
}

let numbersArr = [5,6,7,8,9]

console.log(addToMultiple.apply(obj,numbersArr))
// FunctionName.call(obj,[arg1,arg2,arg3,...])