const btn = document.getElementById("btn")
const form = document.querySelector("form")
const task = document.getElementById('taskname')
const priority = document.getElementById('priority')
const taskarray = []

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})


btn.addEventListener("click",()=>{
    var taskvalue = task.value
    const priorityvalue = priority.value
    const obj = {
        taskvalue,
        priorityvalue
    }
    taskarray.push(obj)
    console.log(taskarray); 
    task.value = ""; 

    const taskContainer = document.getElementById("taskcontainer")
    taskContainer.innerHTML = "";

    taskarray.forEach((e,index) => {
        // document.write(JSON.stringify(e.taskvalue))
        // document.write(JSON.stringify(e.priorityvalue))
        const renderingTask = document.createElement("div")
        renderingTask.classList.add("renderedTask")
        renderingTask.innerHTML = `
        <h6>${e.taskvalue}</h6>
        <h5>${e.priorityvalue} </h5>
        <div class='buttoncontainer'>
        <button class='completebtn'>Mark as Complete</button>
        <button class='deletebtn'>Delete</button>
        </div>
        `

        taskContainer.appendChild(renderingTask);

        const deletebtn = renderingTask.querySelector('.deletebtn');
        deletebtn.addEventListener('click',()=>{
         taskarray.splice(index,1);
        taskContainer.removeChild(renderingTask);
    })
        const completebtn = renderingTask.querySelector('.completebtn');
        completebtn.addEventListener('click',()=>{
            renderingTask.style.backgroundColor = "green";
        
    });
})
})

