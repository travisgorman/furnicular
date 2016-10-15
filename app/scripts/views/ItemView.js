import Backbone from 'backbone'
import $ from 'jquery'
import todo from '../models/todo'
import todos from '../collections/todos'

const ItemView = Backbone.View.extend({

  tagName: 'li',
  className: 'todo-item',

  template: function() {
    return `
        <label>${this.model.title}</label>
        <button class="destroy"></button>
    `
  },

  render() {
    this.$el.html(this.template())
    return this
  },

})
// let item = new ItemView()
export default ItemView
// Authorization: Kinvey 10ec626d-70ac-4ca6-8a6e-a789a37bcfcf.g+MN06e9pGk8DvGx8iYLuBWsrEJOI6rhkS6CZG+da9M=


// <input 
//   class="toggle" 
//   type="checkbox" 
//   ${completed ? 'checked' : ''} />

// <input 
//   class="edit" 
//   value=${this.model.title} />