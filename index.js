const todoButton = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

const init = () => {
    let todoListArr;
    if(localStorage.getItem('todoList')){
        todoListArr = JSON.parse(localStorage.getItem('todoList'));
    }
    else{
        todoListArr = [];

    }
   
    todoListArr.forEach((todo) => {
        const  newTodo  = document.createElement('div');
        newTodo.classList.add('todo');

        const newTodoListItem = document.createElement('li');
        newTodoListItem.innerText = todo.Text;
        if(todo.completed) newTodoListItem.classList.add('mark-complete');

        const newTodoBtnContainer = document.createElement('div');
        newTodoBtnContainer.classList.add('todo-btn-container');

        const completeBtn =  document.createElement('button');
        completeBtn.classList.add('complete-btn');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('trash-btn');
     
        completeBtn.innerHTML =  '<i class="fa fa-check"></i>';
        deleteBtn.innerHTML = ' <i class="fa fa-trash"></i>';

        newTodoBtnContainer.appendChild(completeBtn);
        newTodoBtnContainer.appendChild(deleteBtn);
     
        newTodo.appendChild(newTodoListItem);
        newTodo.appendChild(newTodoBtnContainer);

        todoList.appendChild(newTodo);
       
    });
};

document.addEventListener('DOMContentLoaded',init);

todoButton.addEventListener('click',(event) => {

    event.preventDefault();
    //extracting todo value
    const todoText = todoInput.value;
    //check for empty list
    if(!todoText) return;
    //save to local storage
    saveTodoListToLocalStorage(todoText);

   const  newTodo  = document.createElement('div');
   newTodo.classList.add('todo');
   const newTodoListItem = document.createElement('li');
   newTodoListItem.innerText = todoText;

   const newTodoBtnContainer = document.createElement('div');
   newTodoBtnContainer.classList.add('todo-btn-container');

   const completeBtn =  document.createElement('button');
   completeBtn.classList.add('complete-btn');

   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('trash-btn');

   completeBtn.innerHTML =  '<i class="fa fa-check"></i>';
   deleteBtn.innerHTML = ' <i class="fa fa-trash"></i>';
   newTodoBtnContainer.appendChild(completeBtn);
   newTodoBtnContainer.appendChild(deleteBtn);

   newTodo.appendChild(newTodoListItem);
   newTodo.appendChild(newTodoBtnContainer);

   todoList.appendChild(newTodo);
   todoInput.value = '';
    

});

const saveTodoListToLocalStorage = (todo) => {
   let todoListArr;

   if(localStorage.getItem('todoList')){
    todoListArr  = JSON.parse(localStorage.getItem('todoList'));
   }
   else{
    todoListArr = [];
   }
   
   //console.log(todoListArr);
   todoListArr.push({ text: todo, completed:false });

   localStorage.setItem('todoList',JSON.stringify(todoListArr));
    
};


todoList.addEventListener('click',(e) => {
    const item  = e.target;
    if(
        item.classList.contains('trash-btn')||
        item.classList.contains('fa-trash')
    ) {
        const elementType = item.classList.contains('fa-trash') ? 1:2;
     const btnContainer = 
     elementType == 1 ? item.parentElement.parentElement : item.parentElement;
     const todoListItem = btnContainer.previousElementSibling;
     const todoText = todoListItem.textContent.trim();
     console.log(todoText);
    }
});


// const list = ['jsdjdj','kdfldf','lkdjfldjf'];
// console.log(JSON.stringify(list));

// const obj = {
//     name: 'Aditya',
//     age: 23,
//     lastName: 'Agrawal', 
// };
// console.log(JSON.stringify(obj));