// Calculate total marks and result using object data.

let student = {
    name : 'ravi',
    marks : {
        maths : 80,
        science : 75,
        english : 85
    }
};

let total = student.marks.maths + student.marks.science + student.marks.english;

let result = total >= 180 ? 'pass' : 'fail';

console.log('total : '+ total)
console.log('result : '+ result)

