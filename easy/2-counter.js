function counter(){
    let date = new Date();
    let string = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(string);
    setTimeout(counter,1000);
}

counter();
module.exports = counter;