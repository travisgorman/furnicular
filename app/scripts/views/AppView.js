import Backbone from 'backbone'
import $ from 'jquery'
// import settings from '../settings'
// import todo from './views/ItemView'

const AppView = Backbone.View.extend({
  initialize: function() {},

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
        <ul class="todo-list"></ul>
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
    return this
  },
})
export default AppView