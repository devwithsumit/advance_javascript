//error object - two main properties
// 1.name
// 2.message
// 3.stack (optional)
// try {
//     console.log(x);

// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

//throwing custom error
try {
    throw new Error('\'custom error\'')
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(typeof error);
}

// let age = prompt('enter your age')
// age = parseInt(age)
// try {
//     if(age > 120) throw new EvalError('age above 120 is not possible');
// } catch (error) {
//     console.log(error.name, ':',error.message);
// }
// console.log('script is running');

