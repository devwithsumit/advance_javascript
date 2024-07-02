//without try and catch the program will stop if error occurs
// console.log(x);
console.log('started');
try {
    console.log(x); //generates error
}
catch (error) {
    console.log(error);//catches the error if any 
}
finally{
    console.log('program execution successful!');
}
console.log('completed'); //program execution continues

try {
    //try catch won't work in scheduled code, setTimeout for example
    setTimeout(() => {
        console.log(y);
    }, 2000);
    //can work like this
    setTimeout(() => {
        try {
            console.log(z);
        } catch (error) {
            console.log(error);
        }
        console.log('running');
    }, 4000);
}
catch (error) {
    console.log(error);
}

