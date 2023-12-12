

function counter(){
    let date = new Date();
    let string = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(string);
}

setInterval(counter,1000);
