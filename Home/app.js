const UserName = document.getElementById("user-name");
const Logout = document.getElementById("logout-btn");
const ToDo = document.getElementById("todo-btn");
const input = document.getElementById("task");
const output =document.getElementById("data");
const todoForm = document.getElementById("todo-form");

 

const CurrentUser = JSON.parse(localStorage.getItem("currentUser"));//gets the stored data as a string.
UserName.innerText=CurrentUser.Name;

Logout.addEventListener("click", () => {
          window.location.href = "../Login/index.html";
          localStorage.removeItem("currentUser");

        });
ToDo.addEventListener("click",()=>{
    if(input.value === "")
    {
        alert("Enter someting")
    }else{
        const li = document.createElement("li")
        li.innerHTML=input.value;
        li.style.marginLeft= "20px";
         output.append(li)
    }
   
})  


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todo ={
      task: e.target.task.value,
      createdBy: { ...CurrentUser },//... (Spread Operator)"Is object ya array ke andar jo bhi cheezen hain, unko copy kar k yahan laa ke daal do.//This property contains a copy of the CurrentUser object. The spread operator ... is used to copy all the properties of the CurrentUser object and assign them to the "createdBy" property.
    };
     todos.push(todo)
  
    localStorage.setItem("todos", JSON.stringify(todos));
    alert("Task created successfully");
    e.target.reset();
  });
  
