<template>
    <div class="input-container">
      <input v-model="newTodo" @keyup.enter="emitAddTodo" placeholder="Add a new task..." />
      <button @click="emitAddTodo">Add</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: ''
      };
    },
    methods: {
      emitAddTodo() {
        if (this.newTodo.trim() !== '') {
          this.$emit('addTodo', this.newTodo.trim());
          this.newTodo = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  input {
    width: 75%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 20%;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  