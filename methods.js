const student = {
    name: 'Usman',
    money: 5000,
    study: 'math',
    subjects: ['ealculus', 'algebra', 'geometry'],
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return this.name + 'is participating in an exam'; 
    },
    improveExam: function(subject){
        this.exam(); 
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips ;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);

const reExam = student.improveExam('sabbir')
// console.log(reExam);
const remaining = student.treatDay(900, 100);
// console.log(remaining);
const dola = student.treatDay(500, 50);
console.log(dola);