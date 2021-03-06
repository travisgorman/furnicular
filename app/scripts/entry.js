import $ from 'jquery'
import Backbone from 'backbone'
import settings from './settings'
import router from './router'
import session from './models/session'


$(document).ajaxSend( function(e, xhr) {
  if (localStorage.getItem('authtoken')) {
    xhr.setRequestHeader('Authorization', `Kinvey ${localStorage.getItem('authtoken')}`)
  } 
  else {
    xhr.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)
  }
})

 if (localStorage.getItem('authtoken')) {
  session.retrieve()
 }

Backbone.history.start()

console.log(`${settings.appKey}`)