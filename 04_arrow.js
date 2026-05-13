const user = {
    name: "nikunj",
    price : 999,

    welocme : function(){
        console.log(`${this.name} welocme to site`)
        console.log(this)
    }


}

function nikunj(){
    name= "nikunj",
    console.log(this.name) 
}

// const nikunj = function(){
//     name= "nikunj",
//     console.log(this.name) -> undefined
// }

const nikunj = ()=>{
    name= "nikunj",
    console.log(this.name) //-> undefined
}


