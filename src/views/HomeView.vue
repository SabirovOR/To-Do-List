<template>
    <div>
      <h1>To-Do List</h1>
      <todo-input @addTodo="addTodo"></todo-input>
      <todo-list :todos="todos" @removeTodo="removeTodo"></todo-list>
    </div>
  </template>
  
  <script>
  import TodoInput from '../components/TodoInput.vue';
  import TodoList from '../components/TodoList.vue';
  
  export default {
    components: {
      TodoInput,
      TodoList
    },
    data() {
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
      };
    },
    methods: {
      addTodo(todo) {
        this.todos.push(todo);
        this.saveTodos();
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
        this.saveTodos();
      },
      saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    color: #333;
  }
  </style>
  