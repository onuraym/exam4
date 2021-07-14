//CREATE TASK MODAL WINDOW
const createTaskModal = document.querySelector(".create-task_modal-overlay");
const openCreateBtn = document.querySelector(".create-task_button");
const closeCreateModalBtn = document.querySelector(".create-modal_close-btn");
const cencelButton = document.querySelector(".create-modal_cancel-button");

function toggleCreateTaskModal (event) {
  event.preventDefault();
	createTaskModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
	if(event.target === createTaskModal){
		toggleCreateTaskModal();
	}
}

window.addEventListener("click", windowOnClick);
openCreateBtn.addEventListener("click", toggleCreateTaskModal)
closeCreateModalBtn.addEventListener("click", toggleCreateTaskModal)
cencelButton.addEventListener("click", toggleCreateTaskModal);

//DELETE TASK MODAL WINDOW
const deleteModal = document.querySelector(".delete-modal_overlay");
const openDeleteBtn = document.querySelector(".delete_button")
const closeDeleteModalBtn = document.querySelector(".delete-modal_close-btn")

function toggleDeleteModal () {
	deleteModal.classList.toggle("show-modal2");
}

function windowOnClick2(event) {
	if(event.target === deleteModal){
		toggleDeleteModal();
	}
}

window.addEventListener("click", windowOnClick2);
openDeleteBtn.addEventListener("click", toggleDeleteModal)
closeDeleteModalBtn.addEventListener("click", toggleDeleteModal)


//

const saveBtn = document.querySelector(".save-button");
const tasks = document.querySelector(".tasks");

const titleInput = document.querySelector(".title-input");
const descriptionInput = document.querySelector(".description-input")
const errorText = document.querySelector(".error-text");

const createElement = (tag, className, innerTxt) => {
  // if(!tag){
  //   alert("Внутренняя ошибка сервиса!");
  //   return;
  // }

  const element = document.createElement(tag);

  if(className) {
    element.className = className;
  }

  if(innerTxt) {
    element.innerText = innerTxt;
  } 

  return element;
}

const prependElement = (e) => {
  e.preventDefault();
  const task = createElement("li", "task");
  const taskHeader = createElement("div", "task_header")
  
  const title = createElement("div","task_title", titleInput.value);
  const deleteIcon = createElement("IMG", "delete_button");
  deleteIcon.src = "./assets/delete_icon.png";
  const description = createElement("div", "task_description", descriptionInput.value);
  const checkbox = createElement("input", "checkbox")
  checkbox.setAttribute("type", "checkbox");

  if(!titleInput.value){
    errorText.innerHTML = "Заполните заголовок!";
  }
  else{
  taskHeader.append(title, checkbox);
  task.append(taskHeader, description, deleteIcon);
  tasks.prepend(task);

  titleInput.value = " ";
  descriptionInput.value = " ";
  toggleCreateTaskModal(e);
  }
  
}

const addClassName = () =>{
  const title = document.querySelector(".task_header div")
  title.classList.toggle("crossOut");
}

saveBtn.addEventListener("click", prependElement);

const checkbox = document.querySelector(".checkbox");
// const title = document.querySelector(".task_title")
// checkbox.addEventListener("checked", addClassName);


