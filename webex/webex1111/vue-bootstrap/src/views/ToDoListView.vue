<template>
  <div class="todo">
    <h1>To Do List</h1>
    <to-do-list></to-do-list>
  </div>
</template>


<script>
// @ is an alias to /src
import ToDoList from "@/components/ToDoList.vue";

export default {
  name: 'TodoView',
  components: {
    ToDoList
  }
}
</script>
