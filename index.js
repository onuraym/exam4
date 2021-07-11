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

//

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

const prependElement = () => {
  const task = createElement("li", "task");
  const taskHeader = createElement("div", "task_header")
  task.append(taskHeader);
  const title = createElement("div","task_title", titleInput.value);
  const description = createElement("div", "task_description", descriptionInput.value);

  taskHeader.append(title);
  tasks.prepend(task);

  titleInput.value = " ";
  descriptionInput.value = " ";
}

saveBtn.addEventListener("click", prependElement);