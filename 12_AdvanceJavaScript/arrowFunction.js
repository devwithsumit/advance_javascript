//shortcut for wirting ()=> functions
// const sayHello = name => console.log('hello ' + name);
// sayHello('Sumit')


const x = {
    name: "Sumit",
    role: "Js Developer",
    exp: 20,
    //** for function() - this keyword is the current OBJECT if used inside function()
    //** for ()=> - this is WINDOW object if used in current object
    show: function () {
        console.log('name : ' + this.name); //Sumit
        console.log(this);
        let that = this //solution to use this as current object
        setTimeout(function () {
            //** this is window object for function() inside a function()
            console.log(this);
            console.log('role : ' + that.role);
        }, 2000);
        setTimeout(() => {
            //** this current Object for ()=> inside function()
            console.log(this);
            console.log('exp : ' + this.exp);
        }, 4000);
    }
}
x.show()