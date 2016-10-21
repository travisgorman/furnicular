import Backbone from 'backbone'
import $ from 'jquery'
import settings from '../settings'
import Todo from '../models/Todo'

const Todos = Backbone.Collection.extend({
  url: `http://baas.kinvey.com/appdata/${settings.appKey}/todos`,
  model: Todo,
  
  addNew(title) {
    this.create({
      title: title,
      completed: false
    }, {
        success(model, response){
          console.log('SUCCESS:', model, response)
      },
        error(model, response) {
          console.log('ERROR:', model, response )
      }
    })
  },


})

let todos = new Todos()
export default todos
