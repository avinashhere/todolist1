let addTask=document.getElementById('add-task');
let taskContainer=document.getElementById('task-container');
let inputTask=document.getElementById('input-task');

//eventlistner//
addTask.addEventListener('click',function () {
    let task=document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerHTML=`${inputTask.value}`;
    task.appendChild(li);

    let checkButton=document.createElement('button');
    checkButton.innerHTML=('✔')
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton);

    let deleteButton=document.createElement('button');
    deleteButton.innerHTML=('🗑')
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert('Please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value="";
    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration="line-through";
    });

    deleteButton.addEventListener('click',function(e){
        let target= e.target;
        target.parentElement.remove();
    });
});