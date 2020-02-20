<template>
  <div class="container">
    <br />
    <br />
    <button @click="increment">+</button>
    <br />
    <p>value:{{value}}</p>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { actionTypes, getterTypes } from "../components/store/Counter";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Count",
  methods: {
    ...mapActions({
      increment: actionTypes.increment,
      decrement: actionTypes.decrement
    })
  },
  computed: {
    ...mapGetters({
      value: getterTypes.getStatus
    })
  }
};
</script>