//CREATE TASK MODAL WINDOW
const createTaskModal = document.querySelector('.create-task_modal-overlay');
const openCreateBtn = document.querySelector('.create-task_button');
const closeCreateModalBtn = document.querySelector('.create-modal_close-btn');
const cencelButton = document.querySelector('.create-modal_cancel-button');

function toggleCreateTaskModal () {
	createTaskModal.classList.toggle('create_show-modal');
}

function windowOnClick(event) {
	if(event.target === createTaskModal){
		toggleCreateTaskModal();
	}
}

window.addEventListener('click', windowOnClick);
openCreateBtn.addEventListener('click', toggleCreateTaskModal)
closeCreateModalBtn.addEventListener('click', toggleCreateTaskModal)
cencelButton.addEventListener('click', toggleCreateTaskModal);


//DELETE TASK MODAL WINDOW
const deleteModal = document.querySelector(".delete-modal_overlay");
const openDeleteBtn = document.querySelector(".delete_button");
const closeDeleteModalBtn = document.querySelector(".delete-modal_close-btn");
const deleteCancelBtn = document.querySelector(".delete-modal_cancel-button");

function toggleDeleteModal () {
	deleteModal.classList.toggle("delete_show-modal");
}

function windowOnClick2(event) {
	if(event.target === deleteModal){
		toggleDeleteModal();
	}
}

window.addEventListener("click", windowOnClick2);
deleteCancelBtn.addEventListener("click", toggleDeleteModal)
closeDeleteModalBtn.addEventListener("click", toggleDeleteModal)

//create tasks
let taskId = 1;
let taskArr = [];
 
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');
const errorText = document.querySelector(".error-text");
 
const elemCreator = (tagName, atr = {}, text = '') => {
  const element = document.createElement(tagName);
  Object.keys(atr).forEach((key) => {
    element.setAttribute(key, atr[key]);
  });
  element.textContent = text;
  return element;
};
 
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (this.titleInput.value.trim().length > 0) {
    let newTask = {
      id: ++taskId,
      title: this.titleInput.value,
      description: this.descInput.value,
    };
    taskArr.push(newTask);
    taskRender(taskArr);
    this.titleInput.value = '';
    this.descInput.value = '';
    errorText.innerHTML = '';
    console.log(taskArr);
    toggleCreateTaskModal();
  }
  else{
    errorText.innerHTML = "Заполните заголовок!";
  }
});
 
function taskRender(arr) {
  tasks.innerHTML = '';
  console.log(arr);
  arr.forEach((task) => {
    const taskItem = elemCreator('li', { class: 'task', id: task.id });
    const taskHeader = elemCreator('div', {class: 'task_header'});
    const taskTitle = elemCreator('div', {class: 'task_title'}, task.title);
    const taskDesc = elemCreator('div', {class: 'task_description'}, task.description);

    const deleteIcon = elemCreator('img', {class: 'delete_button'});
    deleteIcon.src = "./assets/delete_icon.png";
    const checkbox = elemCreator('input', {type: 'checkbox', class: 'checkbox'});

    taskHeader.append(taskTitle, checkbox);
    taskItem.append(taskHeader, taskDesc, deleteIcon);
    tasks.prepend(taskItem);
    
  });
  
  addListeners();
}
 
function addListeners() {
  const taskList = document.querySelectorAll('.task');
  taskList.forEach((task) => {
    const checkbox = task.querySelector('.checkbox');
    const title = task.querySelector('.task_title');
    const deleteBtn = task.querySelector('.delete_button');
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        title.style.textDecoration = 'line-through';
      } else {
        title.style.textDecoration = 'none';
      }
    });

    deleteBtn.addEventListener('click', function () {
    toggleDeleteModal();

    const modalDeleteBtn = document.querySelector('.delete-button');
    modalDeleteBtn.addEventListener('click', function(){
    taskArr = taskArr.filter((item) => {
      console.log(item.id);
      console.log(deleteBtn.parentElement.id);
      
      return item.id != deleteBtn.parentElement.id;
      
    });
      toggleDeleteModal();
      console.log(taskArr);
      taskRender(taskArr);
      });
    });
  });
}



