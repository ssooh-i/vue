<template>
  <div class="hello">
    <b-card
    header="오늘 해야 할 일"
    style="max-width: 40rem; margin: auto; margin-top: 10vh;"
    class="mb-2"
    border-variant="info"
    align="left">

      <b-form-group id="to-do-input">
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="10">
              <b-form-input v-model="title" type="text" placeholder="새 할 일을 적으세요." />
            </b-col>
            <b-col sm="2">
              <b-button @click="addList" variant="outline-primary">추가</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-form-group>

      <b-list-group v-if="toDoItems && toDoItems.length">
        <!-- toDoItems == null 이거나 toDoItems.length 0이면 틀린 거라서 실행안됨 -->
        <b-list-group-item
          v-for="toDoItem of toDoItems"
          v-bind:data="toDoItem.title"
          v-bind:key="toDoItem.id">
          <b-form-checkbox id="dododo" v-model="toDoItem.done">
              {{toDoItem.title}}
              <b-button id = "delBtn" variant="outline-danger">삭제</b-button>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
  </b-card>
  </div>
</template>

<script>
// import axios from 'axios'

// import { title } from "process";

export default {
  name: 'to-do',
  data: () => {
    return {
      idx: 0,
      title: "",
      toDoItems: []
    }
  },
  created () {
    // axios.get('http://127.0.0.1:5000/todo/')
    //   .then(response => {
    //     this.toDoItems = response.data.map(r => r.data)

    //   })
    //   .catch(e => {
    //     console.log('error : ', e)
    //   })
  },
  methods: {
    // addList: function(toDoItem) { 
    //   toDoItem.title = this.title;
    //   toDoItem.id =
    // }
    addList() { 
      let todoItem = { 
        id: this.idx++,
        done: false,
        title: this.title,
      }
      this.toDoItems.push(todoItem);
      this.title = "";
    }
  }
}
</script>

<style scoped>
#delBtn {
  float: right;
}
#dododo{
  float: left;
}
</style>