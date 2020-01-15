let obj = {
    num : 3
}

let addToMultiple = function(a,b,c,d,e){
    return this.num + a + b + c + d + e;
}

let bound = addToMultiple.bind(obj);

// lets take a look at what is returining
console.dir(bound)

// works as a call
console.log(bound(1,2,3,4,5))