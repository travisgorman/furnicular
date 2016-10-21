import Backbone from 'backbone'
import $ from 'jquery'
import todos from '../collections/todos'

const ItemView = Backbone.View.extend({
  initialize: function() {},

  tagName: 'li',
  className: 'todo-item',

  template: function() {
    return `
      <p>${this.model.get('title')}</p>
      <button class="destroy"></button>
    `
  },

  render() {
    this.$el.html(this.template())
    return this
  },

})

export default ItemView
