/*******************************************  ********************************************/
let argsToArray = function(){
    // printing array to see its protos
       console.log([])
}
   
argsToArray(12,2,3,4)
/*******************************************  ********************************************/




/*******************************************  ********************************************/
let argsToArray = function(){
	
    /* arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. */
       console.log([].slice.call(arguments))
}
   
argsToArray(12,2,3,4)
/*******************************************  ********************************************/




/*******************************************  ********************************************/
let argsToArray = function(){
    // barrow arrays functinality to nor array objects
       console.log([].slice.call(arguments))
}
   
argsToArray(12,2,3,4)
/*******************************************  ********************************************/