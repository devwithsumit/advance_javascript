class Employee{
    constructor(name){
        this.name = name
        this.post = 'Employee'
        this.company = 'Apple'
    }
    introduce(){
        console.log(`Hello my name is ${this.name}
            and i am ${this.post} in ${this.company}`);
    }
}
class Programmer extends Employee{
    requestPC(){
        console.log(`${this.name} requested for PC`);
    }
    introduce(){
        this.post = 'programmer'
        super.introduce()
    }
}
const sumit = new Programmer('Sumit')
sumit.introduce()
sumit.requestPC()