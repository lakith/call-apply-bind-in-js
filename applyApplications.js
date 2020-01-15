let numArr = [1,2,3,4,5]

// using aply - keep in mind you have to pass a object as the first param, since we dont want to i'm assining that to null
console.log(Math.min.apply(null,numArr))

// you can achive the same thing with spred oparators.
console.log(Math.min(...numArr))


//https://www.youtube.com/watch?v=AYVYxezrMWA
//https://www.youtube.com/watch?v=71AtaJpJHw0
//https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q/playlists
//https://www.youtube.com/watch?v=Tx-0tcEl1I0
//https://stackoverflow.com/questions/43576089/arrow-functions-using-call-apply-bind-not-working
//https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
//https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
//https://www.youtube.com/playlist?list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf