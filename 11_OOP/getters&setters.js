class Animal{
    constructor(name){
        this.name = name
    }
    fly(){
        console.log('flying');
    }
    get getname(){ //get function
        return this.name
    }
    set setname(newName){
        this.name = newName;
    }
}
let obj = new Animal('sheru')
obj.fly()
console.log(obj.getname);//get function can be called without using (paratheses)
obj.setname = 'bruno'
console.log(obj.getname);//get function can be called without using (paratheses)
let c = 22

//instance of
//return true even if 
console.log(obj instanceof Animal);
console.log(c instanceof Animal);