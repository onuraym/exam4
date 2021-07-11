const modal = document.querySelector(".modal-overlay");
const openBtn = document.querySelector(".create-task_button");
const closeBtn = document.querySelector(".close-btn");

		// переключаем класс у модалки
		// на тот, у которого есть нужные свойства (show-modal)

function toggleModal () {
	modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
	if(event.target === modal){
		toggleModal();
	}
}

window.addEventListener("click", windowOnClick);
openBtn.addEventListener("click", toggleModal)
closeBtn.addEventListener("click", toggleModal)

const form = document.querySelector(".form");
const name = document.querySelector(".name")


// let formObj = {};

// form.onsubmit = function() {
//   var name = this.name.value;
//   var email = this.email.value;
//   var text = this.text.value;
//   formObj.name = name;
//   formObj.email = email;
//   formObj.text = text;
//   console.log(formObj);
//   return false;
// };

const tasksArray = [
  {
    title: "it academy",
    task: " hello. I'm It Academy"
  },
  {
    title: "Nuraym",
    task: "Hello! I'm Nuraym"
  }
]

const saveBtn = document.querySelector(".save-button");
const tasks = document.querySelector(".tasks");

const titleInput = document.querySelector(".title-input");
const descriptionInput = document.querySelector(".description-input")

const createElement = (tag, className, innerTxt) => {
  if(!tag){
    alert("Внутренняя ошибка сервиса!");
    return;
  }

  const element = document.createElement(tag);

  if(className) {
    element.className = className;
  }

  if(innerTxt) {
    element.innerText = innerTxt;
  } 

  return element;
}

const renderTasksArray = (tasksArray) => {
  for(let i = 0; i < tasksArray.length; i++){
    const element = tasksArray[i];
    console.log(element);

    const task = createElement("li", "task");
    const taskTitle = createElement("div","task_title", element.title);
    const taskDescription = createElement("div", "task_description", element.task);
    const img = createElement("IMG", "delete_button");
    img.src = "./assets/delete_icon.png";
    task.appendChild(img);
    

    task.append(taskTitle, taskDescription, img);
    tasks.prepend(task);
  }
}

const clearInput = () => {
  titleInput.value = " ";
  descriptionInput.value = " ";
}

const clearTask = (tasks) => {
  tasks.innerHTML = '';
}

// validate = () => {
//   if(!messageInput.value) {
//     alert("You have not entered a message!");
//   const}
//   if(!authorInput.value || messageInput.value) {
//     authorInput.value = "Unknowm author";
//   }
// } 

renderTasksArray(tasksArray);

saveBtn.addEventListener("click", function(){
  const task = {
    title: titleInput.value,
    task: descriptionInput.value
  }
  
  tasksArray.push(task);
  clearInput();
  console.log(tasks);
  clearTask(tasks);
  console.log(tasks);
  renderTasksArray(tasksArray);
});