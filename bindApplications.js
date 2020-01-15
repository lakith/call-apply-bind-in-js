let button = function (content) {
    this.content = content;
}

button.prototype.click = function(){
    console.log(`${this.content} clicked`)
}

let newButton = new button('add')

// click is loosely coupled with the new button so bind will be halpfull to bind 
let boundButton = newButton.click.bind(newButton)

boundButton()