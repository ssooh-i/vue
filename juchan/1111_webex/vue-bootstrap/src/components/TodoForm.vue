<template>
  <div class="todo">
    <b-card
      header="오늘 해야 할 일"
      style="max-width: 40rem; margin: auto; margin-top: 10vh"
      class="mb-2"
      border-variant="info"
      align="left"
    >
      <b-form-group id="to-do-input">
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="10">
              <b-form-input v-model="title" type="text" placeholder="새 할 일을 입력 하든지 말든지" />
            </b-col>
            <b-col sm="2">
              <b-button variant="outline-primary" @click="addTodo">추가</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-form-group>

      <b-list-group v-if="toDoItems && toDoItems.length">
        <b-list-group-item v-for="toDoItem of toDoItems" v-bind:key="toDoItem.id">
          <b-form-checkbox v-model="toDoItem.done">
            <span class="title-span" :class="{ is_completed: toDoItem.done }">{{ toDoItem.title }}</span>
          </b-form-checkbox>
          <b-button
            v-if="toDoItem.done"
            class="right-align"
            pill
            variant="outline-danger"
            @click="completed(toDoItem.id)"
            >완료(삭제)</b-button
          >
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<style scoped>
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.custom-control {
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.custom-control-label {
  margin-left: 10px;
}
.is_completed {
  text-decoration: line-through;
}
.right-align {
  float: right;
}
.title-span {
  margin-left: 10px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "todo-form",
  data: () => {
    return {
      idx: 0,
      title: "",
      toDoItems: [],
      placeholder: "안뇽?",
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:5000/todo/")
      .then((response) => {
        this.toDoItems = response.data.map((r) => r.data);
      })
      .catch((e) => {
        console.log("error : ", e);
      });

    this.placeholder = this.$route.query.placeholder;
  },
  methods: {
    addTodo() {
      let toDoObj = {
        id: this.idx++,
        title: this.title,
        done: false,
      };
      this.toDoItems.push(toDoObj);
      this.title = "";
    },
    completed(inputId) {
      this.toDoItems.forEach((item, index) => {
        if (item.id === inputId) {
          this.toDoItems.splice(index, 1);
        }
      });
    },
  },
};
</script>
