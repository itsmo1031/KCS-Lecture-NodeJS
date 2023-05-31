'use strict';

const LS_KEY = 'todos';

let localTodos = [];
const todoList = document.getElementById('todo-list');
const inputElem = document.getElementById('todo-input');

const addTodo = (event) => {
  event.preventDefault();
  const task = inputElem.value;
  const data = { id: localTodos.length, name: task, completed: false };
  printTodo(data);

  inputElem.value = '';
};

const printTodo = (data) => {
  const newTask = document.createElement('li');
  newTask.classList.add('todo-content');
  newTask.innerText = data.name;
  if (data.completed) {
    newTask.classList.add('completed');
  }
  makeTodoDiv(newTask);
  localTodos.push({
    ...data,
    id: localTodos.length,
  });
  saveTodos();
};

const loadTodos = () => {
  const loaded = JSON.parse(localStorage.getItem('todos')) || [];
  loaded.forEach((data) => {
    printTodo(data);
  });
};

const makeTodoDiv = (todo) => {
  const todoDiv = document.createElement('div');
  todoDiv.className = 'todo';
  todoDiv.id = localTodos.length;
  todoDiv.appendChild(todo);
  const completeBtn = document.createElement('button');
  completeBtn.innerText = '완료';
  completeBtn.className = 'complete-button';
  completeBtn.addEventListener('click', handleCompleteBtn);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '삭제';
  deleteBtn.className = 'delete-button';
  deleteBtn.addEventListener('click', handleRemoveBtn);

  todoDiv.appendChild(completeBtn);
  todoDiv.appendChild(deleteBtn);

  document.getElementById('todo-list').appendChild(todoDiv);
};

const saveTodos = () => {
  localStorage.setItem(LS_KEY, JSON.stringify(localTodos));
};

const handleCompleteBtn = (event) => {
  event.preventDefault();
  event.target.previousElementSibling.classList.add('completed');
  const todoId = event.target.parentNode.id;
  localTodos[todoId].completed = true;
  saveTodos();
};

const handleRemoveBtn = (event) => {
  event.preventDefault();
  const target = event.target.parentNode;
  todoList.removeChild(target);
  const cleanTodos = localTodos.filter((todo) => {
    return todo.id !== parseInt(target.id);
  });
  console.log(cleanTodos);
  localTodos = cleanTodos;
  saveTodos();
};

const init = () => {
  console.log('application initiated!');
  loadTodos();
  inputElem.focus();
  document.getElementById('input-form').addEventListener('submit', addTodo);
};

window.onload = init;
