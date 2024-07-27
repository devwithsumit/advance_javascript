class Animal{
    constructor(name){
        this.name = Animal.capitalise(name)
    }
    static capitalise(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}
obj = new Animal('sheru')
console.log(obj.name);

console.log(obj.capitalise(obj.name));//can't used through objects
console.log(Animal.capitalise('kaka'));//can be used anywhere through Animal.func()