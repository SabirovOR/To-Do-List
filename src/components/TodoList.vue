<template>
    <ul id="todo-list">
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <span>{{ todo }}</span>
        <button @click="emitRemoveTodo(index)">Delete</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: ['todos'],
    methods: {
      emitRemoveTodo(index) {
        this.$emit('removeTodo', index);
      }
    }
  };
  </script>
  
  <style scoped>
  #todo-list {
    list-style: none;
    padding: 0;
  }
  
  .todo-item {
    background: #f9f9f9;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }
  
  .todo-item button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
  }
  
  .todo-item button:hover {
    background-color: #c82333;
  }
  </style>
  