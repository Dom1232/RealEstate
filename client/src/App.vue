<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/list">Employees</router-link>
      <router-link to="/find">Branches</router-link>
      <router-link to="/clientList">Clients</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #333;
  padding: 20px;
  color: white;
  width: 100%;
  margin-left: -8px;
  margin-top: -8px;
}

nav a {
  color: white;
  margin: 0 20px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

</style>
