<template>
  <div id="app">
    <button>
      <router-link to="/home">Home</router-link>
    </button>
    <button>
      <router-link to="/about">About</router-link>
    </button>
    <button>
      <router-link to="/register">Register</router-link>
    </button>
    <button>
      <router-link to="/login">Login</router-link>
    </button>
    <button>
      <router-link to="/count">Count</router-link>
    </button>
    <router-view></router-view>
    <br />
    <br />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {}
};
</script>