import Backbone from 'backbone'
import $ from 'jquery'
import settings from '../settings'

const Todos = Backbone.extend({
  url: `http://baas.kinvey.com/appdata/${settings.key}/todos`,
  model: todo,
})

let todos = new Todos()
export default todos

// Authorization: Kinvey 10ec626d-70ac-4ca6-8a6e-a789a37bcfcf.g+MN06e9pGk8DvGx8iYLuBWsrEJOI6rhkS6CZG+da9M=