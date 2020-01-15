let myObj = {
    asyncGet(callback){
        callback()
    },
    parseData(){
        console.log("parse data called")
    },
    render(){
        this.asyncGet(function(){
            this.parseData();
        }.bind(this))

        /***************
         * you can do the same thing with below way.
         * 
         *  that = this
         * 
         *  this.asyncGet(function(){
         *       that.parseData();
         *  }.bind(this))
         * 
         * but using bind is the better way.
         * ***********************/
    }
}