const app = new Vue({
  el: '#root',
  data: {
    todos: [
      "fare la spesa",
      "leggere un libro",
      "studiare vue"
    ],
    newTodo: ''
  },
  methods: {
    addTodo: function () {
      if (this.newTodo != '') {
        this.todos.push(this.newTodo)
        this.newTodo = ''
      }
    },
    removeTodo: function (indexTodo) {
      this.todos.splice(indexTodo, 1)
    }
  }
});