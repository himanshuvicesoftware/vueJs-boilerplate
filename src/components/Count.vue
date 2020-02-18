<template>
<div class="container">
  
   <button @click="increment">+</button>
   <p>value:{{ value }}</p>
   <button @click="decrement">-</button>
   
    <!--<button @click="decrement">-</button>-->
      
</div>
</template>


<script>
import {actionTypes} from "./store/index"
import {mapState} from "vuex"
/*export default {
    name:'Count',
     
data(){
    return{
       count:0
    }
},
methods:{
    increment(){
        this.count++
    }
}*/

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
  return state.counter}
})
}


</script>