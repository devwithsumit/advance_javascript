class RailwayForm {
    constructor(givenname, trainno) {
        this.type = 'railway Form' //can be given as the default value
        this.name = givenname
        this.trainno = trainno
    }
    preview(){
        console.log(`Name: ${this.name}
            \nTrain number:${this.trainno}
            \nForm type : ${this.type}`)
    }
    submit() {
        console.log(this.name + ": Your form is SUBMITTED for train number: " + this.trainno)
    }
    cancel() {
        console.log(this.name + ": This form is CANCELLED for train number: " + this.trainno)
    }
}


let sumitForm = new RailwayForm("Sumit", 12558)
let rohanForm = new RailwayForm("Rohan", 12716)

sumitForm.preview()
rohanForm.preview()
sumitForm.submit()
sumitForm.cancel()