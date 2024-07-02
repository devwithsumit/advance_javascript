//finally clause  --
//1.* runs if try fails
//2.* runs if catch also generates an error
//3.*runs even if function is returned
// (use cases are Close the file, Exit the loop, Write to the log file)

// case 1.
// console.log('started');
// try {
//     console.log(x);
// }
// catch (error) {
//     console.log(error);
// }
// finally {
//     //works if try generates an error
//     console.log('program execution successful!');
// }
// console.log('completed');

// // case 2.
// console.log('started');
// try {
//     console.log(x);
//     console.log('completed');//won't work
// }
// catch (error) {
//     console.log(error);
//     console.log(a);
// }
// finally {
//     //works if catch also generates an error
//     console.log('program execution successful after catch block failed!');
// }

// case 3.
const f =  function(){
    console.log('started');
    try {
        console.log('no error');
        return;
        console.log('completed');//won't work
    }
    catch (error) {
        console.log(error);
    }
    finally {
        //runs just before the func is about to returned in even if program is returned
        console.log('program execution successful when function is already returned!');
    }
}
f()
console.log('completed');