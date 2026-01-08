// student score system:

const students = [];

function addstudent(name,score){
    score = Number(score);
    score = score ?? 0;
    name = name.trim().toUpperCase();
    students.push({name,score})
} 

// get grades:

function getGrades(){

   return students.map((student)=>{
        let grade = 'F';

        if(student.score >= 90) grade='a';
        else if(student.score >= 75) grade='b';
        else if(student.score >= 35) grade="d";
        return {...student,grade}
    });



}

// Top scores 
function getTopScores(){
    return students.filter((student) => student.score >= 75);
}

// Find Student
function findStudent(name){
    return students.find((student) => student.name == name);
}

// check the failures :
function hasFailures(){
    return students.some((student) => student.score < 35);
}

// display data 
function displayAll(){
    const graded = getGrades();
    console.log('student data');
    console.log('all student with grades');
    console.log('name|score|grade');
    graded.forEach((student) =>{
        console.log(`${student.name} | ${student.score} | ${student.grade}`);
    });
}

// adding student :

addstudent('john','91');
addstudent('Ravi','82');
addstudent('alex','44');
addstudent('vijay','20');

// display student data :
displayAll();


// top scores
console.log('\n Top scores: ')
console.log(getTopScores());


// Find Student:
console.log("\n searching for ravi: ")
console.log(findStudent('RAVI'))


// check failures:
console.log('\n Any failures' )
console.log(hasFailures() ? 'yes some students failed ' : "no failures "  );

