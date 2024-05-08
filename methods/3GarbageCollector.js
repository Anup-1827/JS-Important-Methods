function outer(){
    let i =10;
    let j= 20;

    return ()=>{
        console.log(j);
    }
}


const myFun = outer();
myFun()