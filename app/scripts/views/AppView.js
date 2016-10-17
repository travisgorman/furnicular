import Backbone from 'backbone'
import $ from 'jquery'
// import settings from '../settings'
import ItemView from '../views/ItemView'
import todos from '../collections/todos'
import Todo from '../models/Todo'

const AppView = Backbone.View.extend({
  initialize: function(){
    todos.on('add', () => this.render())
    todos.fetch()
  },

  className: 'todoapp',
  tagName: 'section',

  template: function() {
    return `
       <header class="header">
         <h1>DO THINGS</h1>
         <input
           class="new-todo"
           placeholder="What do?"
           autofocus>
       </header>

      <section class="main">
        <input
          class="toggle-all"
          id="toggle-all"
          type="checkbox">
        <ul class="list" id="list"></ul>
      </section>

      <footer class="info">
        <span>0 items remain</span>
        <ul class="filters">
          <li>all</li>
          <li>active</li>
          <li>completed</li>
        </ul>
      </footer>
    `
  },

  render: function() {
    this.$el.html(this.template())
    todos.forEach(function(todo) {
      let item = new ItemView({ model: todo })
      item.render()
      $('#list').prepend(item.render().$el)

    }).then
    return this
  },

})
export default AppView

// "headers": {
//           "Content-Type":"application/json",
//           "X-Kinvey-API-Version":"3",
//           "X-Kinvey-Request-Id":"4836616f7910463c998fceb4dcbeda8b",
//           "X-Powered-By":"Express",
//           "Authorization": "Kinvey 10ec626d-70ac-4ca6-8a6e-a789a37bcfcf.g+MN06e9pGk8DvGx8iYLuBWsrEJOI6rhkS6CZG+da9M=",