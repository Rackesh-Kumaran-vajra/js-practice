 

//for testing how the logic is working :

// 1) getting the input values from the input text 

/*
function getvalues(){
    let input1Element = document.getElementById('title').value;
    let input2Element = document.getElementById('decscription').value;

    console.log(input1Element);
    alert('you entered the Task Title : '+ input1Element);
    console.log(input2Element)
    alert('you entered the Task Title : '+ input2Element);

}
*/    



const titleInput = document.getElementById('title');
const descInput = document.getElementById('decscription');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('tasklist'); 


class Task {
  constructor(title, description) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date().toLocaleString();
  }
}




let task = [];

function addTask(){
    const title = titleInput.value.trim();
    const decscription = descInput.value.trim();

    if(title === ''){
        alert('please enter a task');
        return;
    }

    const newTask = new Task(title,decscription);
    task.push(newTask);

    console.log(newTask);

    //displayTask(newTask);

    titleInput.value = '';
    descInput.value = '';
}

















