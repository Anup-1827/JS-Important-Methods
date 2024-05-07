let date = new Date();

function debounce(){
    // console.log("Debounce");
    const newDate = new Date();

    if(newDate - date > 500){
        console.log("Calling");
        date = new Date()
    }

    // const cr
}