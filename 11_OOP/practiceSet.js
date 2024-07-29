// 1., 2 and 5. complex number and add a integer to it
class Complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        if (num instanceof Complex) {
            this._real += num.real;
            this._imaginary += num.imaginary;
        } else if (typeof num === 'number') {
            this._real += num;
            this._imaginary += num;
        } else {
            throw new Error("Argument must be a Complex number or an integer.");
        }
    }
    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set real(newReal) {
        this._real = newReal
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary
    }
}
let a = new Complex(1, 2)
let b = new Complex(4,8)
console.log(`a : ${a.real} + ${a.imaginary}i`);
a.real = 4
a.imaginary = 1
console.log(`a changed to: ${a.real} + ${a.imaginary}i`);

a.add(5);  // Adding an integer
console.log(`a = a + 5 : ${a.real} + ${a.imaginary}i`);

a.add(b);  // Adding another complex number
console.log(`b: ${b.real} + ${b.imaginary}i`);
console.log(`a + b: ${a.real} + ${a.imaginary}i`);



// 3. & 4. - overriding and instanceof
class Human {
    breathe() {
        console.log('Human Breathes');
    }
}
class Student extends Human {
    constructor(name) {
        super()
        this.name = name
    }
    breathe() {
        console.log(`${this.name} breathes`);
    }
}
let obj2 = new Student('sumit')
obj2.breathe()
console.log(obj2 instanceof Human);






