let flag = true;

function throttling(){
    if(flag){
        console.log("Thrott....");
        flag = false;
        setTimeout(()=>{
            flag = true
        },500)
    }
}