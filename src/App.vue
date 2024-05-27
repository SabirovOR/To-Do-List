
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  color: #007bff;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}
</style>
