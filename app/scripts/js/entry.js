import Backbone from 'backbone'
import $ from 'jquery'
import _ from 'underscore'
import settings from './settings'
import todos from './collections/todos'
import todo from './models/todo'


Backbone.history.start();

location.hash = ''

console.log('todo Model:', todo)
// console.log('todos collection:', todos )
// console.log('todo model:', todo )