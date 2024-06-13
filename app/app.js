const addTask = () => {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Поле не может быть пустым');
    return;
  }
  
  const todoList = document.getElementById('todo-list');
 
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  listItem.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);
  taskInput.value = '';
}

document.getElementById('add-button').addEventListener('click', addTask);

document.getElementById('new-task').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
