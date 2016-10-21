import Backbone from 'backbone'
import $ from 'jquery'
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
  events: {
    'click #submit-new' : 'addNew'
  },

  addNew(e) {
    let title = $('input[name="new-todo"]').val()
    todos.addNew(title)
  },

  template: function() {
    return `
       <header class="header">
         <h1>DO THINGS</h1>
         <input
           class="new-todo"
           id="new-todo"
           name="new-todo"
           placeholder="What do?"
           autofocus>
          <button class="submit-new" id="submit-new">Do It!</button>
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
