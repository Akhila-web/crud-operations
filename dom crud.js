function addTask() {

    let inputData = document.getElementById("enterData");
    let inputDataValue = inputData.value.trim()

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");

    liTag.innerHTML += `
    ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"

  
    allTasksContainer.appendChild(liTag)

    let editBtn = document.querySelector(".edit")
    editBtn.style.backgroundColor = "blue"

    let dlteBtn = document.querySelector(".delete")
    dlteBtn.style.backgroundColor = "red"

    inputData.value = ""
    dlteBtn.addEventListener("click",()=>{
        deleteTask(liTag)
        console.log("df is called")
    }
)

editBtn.addEventListener("click",()=>{
    EditTask(liTag)
})
}

function deleteTask(liTag){
let a=confirm("are you sure")
if(a){
    liTag.remove()
}
}
function EditTask(item){
     let x=prompt("enter the data",item.firstChild.textContent)
     if(x!==null && x.trim()!==""){
        item.firstChild.textContent=x;
     }
}



   


   

