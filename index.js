const todoButton = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click',(e) => {
    e.preventDefault();
    //extracting todo value
    const todoText = todoInput.value;
    //check for empty list
    if(!todoText) return;
    
   const  newTodo  = document.createElement('div');
   newTodo.classList.add('todo');
   const newTodoListItem = document.createElement('li');
   newTodoListItem.innerText = todoText;
   const newTodoBtnContainer = document.createElement('div');
   newTodoBtnContainer.classList.add('todo-btn-container');
   const completeBtn =  document.createElement('button');
   completeBtn.classList.add('complete-btn');
   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('delete-btn');

   completeBtn.innerHTML =  '<i class="fa fa-check"></i>';
   deleteBtn.innerHTML = ' <i class="fa fa-trash"></i>';
   newTodoBtnContainer.appendChild(completeBtn);
   newTodoBtnContainer.appendChild(deleteBtn);

   newTodo.appendChild(newTodoListItem);
   newTodo.appendChild(newTodoBtnContainer);
   todoList.appendChild(newTodo);
   todoInput.value = '';
    

});