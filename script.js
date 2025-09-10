function addTask(event){
   // console.log("inside function");
    
     event.preventDefault();
    const task=taskInput.value
    console.log(task);
    if(task==" "){
        alert("Please Fill The Form")
    }
    else{
        //add todo list
        let li=document.createElement('li')
        li.innerHTML= ` <div class="flex justify-evenly mt-6 item-center">
     <img  src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" width="30px" height="30px" alt="">
      ${task}
      <button type="button" onclick="editTask(this)">
      <img  src="https://cdn-icons-png.flaticon.com/128/3756/3756600.png" width="30px" height="30px" alt="">
      </button> 
      <button type="button" onclick="deleteTask(this)" ><img  src="https://cdn-icons-png.flaticon.com/128/14464/14464813.png" width="30px" height="30px" alt=""></botton>
      </div>`

        taskList.appendChild(li)
        taskInput.value=" "
    }
}
function editTask(button){
    console.log(button);
    li=button.parentNode
    console.log(li);
    console.log(li.childNodes[2]);
    currentText=li.childNodes[2].textContent
    console.log(currentText);
    newText= prompt("Enter task",currentText)
    if(newText){
        li.childNodes[2].textContent=newText
    }
}
function deleteTask(button){
    console.log(button);
    console.log(button.closest("li"));
    let li=button.closest("li")
    li.remove()
    
}