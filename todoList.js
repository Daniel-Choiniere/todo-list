var todoList = {
  todos: [],
  displayTodos: function() {
    //  if user tries to submit an empty Todo submisson
    
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    }
    else {
      console.log('My Todos: ')
      for (var i = 0; i < this.todos.length; i++) {
        // if valid Todo added, make the property completed true, display x
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        // else if item not completed, no x is displayed
        } else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },
  
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed (checked) Todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // If all Todos are completed, make everything false (not checked)
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      } 
    //  If only some Todos are completed, make the rest true (checked)
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');

// console.log(todoList.toggleCompleted(1));
// console.log(todoList.toggleCompleted(0));
// console.log(todoList.toggleCompleted(2));

// console.log(todoList.toggleAll())

// GET ACCESS TO THE DISPLAY TODOS BUTTON
// RUN THE DISPLAYTODOS METHOD WHEN SOMEONE CLICKS THE DISLAY TODOS BUTTON


 var handlers = {
   displayTodos: function() {
     todoList.displayTodos();
   },
   toggleAll: function() {
     todoList.toggleAll();
   },
   addTodos: function() {
     var addTodoTextInput = document.getElementById('addTodoTextInput');
     todoList.addTodo(addTodoTextInput.value);
     addTodoTextInput.value = '';
   }
 };
 