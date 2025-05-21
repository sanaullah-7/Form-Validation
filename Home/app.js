const UserName = document.getElementById("user-name");
const Logout = document.getElementById("logout-btn");
const ToDo = document.getElementById("todo-btn");
const input = document.getElementById("task");
const output = document.getElementById("data");
const todoForm = document.getElementById("todo-form");
// logout
const logoutIcon = document.getElementById("logout-icon");
const sidebar = document.getElementById("logout-sidebar");
function toggleSidebar() {
      sidebar.classList.toggle("active");
    }
    logoutIcon.addEventListener("click", toggleSidebar);

 
//
const CurrentUser = JSON.parse(localStorage.getItem("currentUser"));//gets the stored data as a string.
UserName.innerText=CurrentUser.Name;//we get Currentuser and show Name in Currentuser on UI ok now undersand

Logout.addEventListener("click", () => {
          window.location.href = "../Login/index.html";
          localStorage.removeItem("currentUser");

        });
ToDo.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter something");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.style.marginTop = "10px";
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.gap = "10px";
  li.style.padding = "10px";
  li.style.border = "none";
  li.style.fontSize = "22px";
  li.style.borderRadius = "5px";
  li.style.backgroundColor = "red"; // light red initially

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
 checkbox.style.width = "18px";
 checkbox.style.height = "18px";
  // Checkbox behavior
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
      li.style.backgroundColor = "green"; // green background
    } else {
      taskText.style.textDecoration = "none";
      li.style.backgroundColor = "red"; // back to red
    }
  });

  // Task text span
  const taskText = document.createElement("span");
  taskText.textContent = input.value;//taskText ko flex: 1 mil gaya, matlab wo available space mein apni jagah ko flexible banayega.
  taskText.style.flex = "1";

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.fontSize = "20px";
  editBtn.style.border = "none";
  editBtn.style.borderRadius="5px";
  // Hover effect
editBtn.addEventListener('mouseover', function () {
  editBtn.style.backgroundColor = 'orange';  // Hover color
  editBtn.style.color = 'white';

});

editBtn.addEventListener('mouseout', function () {
  editBtn.style.backgroundColor = ''; // Reset when mouse leaves
  editBtn.style.color = "black";

});

  // Save button (hidden initially)
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.style.fontSize = "20px";
  saveBtn.style.border = "none";
  saveBtn.style.borderRadius="5px";
  saveBtn.style.display = "none";
  

  // Hover effect
saveBtn.addEventListener('mouseover', function () {
  saveBtn.style.backgroundColor = 'skyblue'; 
});

saveBtn.addEventListener('mouseout', function () {
  saveBtn.style.backgroundColor = ''; // reset to default
  
});

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.fontSize = "20px";
  deleteBtn.style.border = "none";
  deleteBtn.style.borderRadius="5px";
  // Hover effect
deleteBtn.addEventListener('mouseover', function () {
  deleteBtn.style.backgroundColor = 'indianred'; // light red color
  deleteBtn.style.color = 'white';

});

deleteBtn.addEventListener('mouseout', function () {
  deleteBtn.style.backgroundColor = ''; // reset to default
  deleteBtn.style.color = 'black';

});

  

  // Edit button behavior
  editBtn.addEventListener("click", () => {
    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = taskText.textContent;
    inputEdit.style.flex= "1";//Iska matlab hai ke inputEdit wale element ko flex container ke andar available jagah zyada leni di ja rahi hai.
    // Ye usko flexible banata hai.
    
    // replaceChild(newNode, oldNode) is a valid method of DOM nodes.
    li.replaceChild(inputEdit, taskText);//Yeh line taskText ko hata kar uski jagah input box (inputEdit) laga deti hai taake user task ko edit kar sake.
    editBtn.style.display = "none";//Edit karte waqt "Edit" button gayab kar diya jata hai taake dubara click na ho
    deleteBtn.style.display = "none";//"Delete" button bhi temporarily chhupa diya jata hai edit mode mein.
    saveBtn.style.display = "inline-block";//"Save" button ko visible kar deta hai jab user edit mode mein aata hai.
  });

  // Save button behavior
  saveBtn.addEventListener("click", () => {
    const inputEdit = li.querySelector("input[type='text']");
    taskText.textContent = inputEdit.value;
    li.replaceChild(taskText, inputEdit);
    editBtn.style.display = "inline-block";
    deleteBtn.style.display = "inline-block";
    saveBtn.style.display = "none";
  });

  // Delete button behavior
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append elements to li
  li.append(checkbox,taskText,editBtn,saveBtn,deleteBtn);

  // Append li to output
  output.appendChild(li);

 
  // Show popup first
  document.getElementById("popup").style.display = "block";
});
// Popup OK button calls this
function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todo ={
      task: e.target.task.value,
      createdBy: { ...CurrentUser },//... (Spread Operator)"Is object ya array ke andar jo bhi cheezen hain, unko copy kar k yahan laa ke daal do.//This property contains a copy of the CurrentUser object. The spread operator ... is used to copy all the properties of the CurrentUser object and assign them to the "createdBy" property.
    };
     todos.push(todo)
  
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.reset();
  });
  
