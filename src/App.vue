<template>
  
  <div id="app">
   <button><router-link to="/home">Home</router-link></button>
   <button><router-link to="/about">About</router-link></button>
   <button><router-link to="/register">Register</router-link></button>
   <button><router-link to="/login">Login</router-link></button>
   <button><router-link to="/new_user">Clear</router-link></button>
  <About/>
  <Register/>
  <Login/>
  <router-view></router-view>
  <br><br>
  <img alt="Vue logo" src="./assets/logo.png">
    <Count/>
  </div>
</template>
<script>
//import HelloWorld from './components/HelloWorld.vue'

/*import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Register from './pages/register.vue'
import Login from './pages/login.vue'*/
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
#app img{
  margin-left:125px;
}
#app button {
  height:30px;
      width:100px;
       display: block;
       float: left;
       margin-left: 10px;
       
}
</style>
