const task=document.getElementById("input-box");
const taskContainer=document.getElementById("task-container");

task.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
        addtask();
    }
})

function addtask(){
    if(task.value===""){
        alert("Please Write A Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=task.value;
        taskContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML=`&times;`;
        li.append(span)
    }
    task.value="";
    saveData();
}
taskContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
})
function saveData(){
    localStorage.setItem("data",taskContainer.innerHTML)
}
function showTask(){
    taskContainer.innerHTML=localStorage.getItem("data");
    

}
showTask();

