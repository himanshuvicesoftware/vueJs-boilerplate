<template>
<div class="container">
  <br><br>
   <button @click="increment">+</button>
   <br>
   <p>value:{{value}}</p>
  <button @click="decrement">-</button>
      
</div>
</template>
s

<script>
import {actionTypes} from "../components/store/Counter"
import {mapState} from "vuex"


export default {
    name:'Count',
    methods:{
    increment(){
      console.log("hello",this)
        this.$store.dispatch(actionTypes.increment)

    },

    decrement(){
      console.log("hello",this)
        this.$store.dispatch(actionTypes.decrement)

    }
},

computed:mapState({
  value:state=>{console.log(state) 
  return state.counter.counter}
})
}


</script>