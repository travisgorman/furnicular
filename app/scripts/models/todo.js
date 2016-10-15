import Backbone from 'backbone'
import $ from 'jquery'
import settings from '../settings'

const Todo = Backbone.Model.extend({
  urlRoot: `http://baas.kinvey.com/appdata/${settings.key}/todos`,
  idAttribute: '_id',

  defaults: {
    title: '',
    completed: false,
  },

    // Toggle the `completed` state of this todo item.
  toggle: function () {
    this.save({
      completed: !this.get('completed')
    });
  },

})

let todo = new Todo()
export default todo