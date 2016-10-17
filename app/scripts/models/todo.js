import Backbone from 'backbone'
import $ from 'jquery'
import settings from '../settings'

const Todo = Backbone.Model.extend({
  urlRoot: `http://baas.kinvey.com/appdata/${settings.appKey}/todos`,
  idAttribute: '_id',

  defaults: {
    title: '',
    completed: false,
  },

  parse : function(response) {
    return {
      title : response.title,
      completed: response.completed,
      idAttribute: response._id,
    }
  },

    // Toggle the `completed` state of this todo item.
  toggle: function () {
    this.save({
      completed: !this.get('completed')
    });
  },

})

// let todo = new Todo()
export default Todo