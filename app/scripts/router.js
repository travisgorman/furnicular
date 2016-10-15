import Backbone from 'backbone'
import $ from 'jquery'
import AppView from './views/AppView'

const Router = Backbone.Router.extend({
  routes: {
    '/*' : 'renderApp',
    'app' : 'renderApp',
  },
  renderApp: function() {
    let app = new AppView()
    console.log('appview:', AppView.$el )
    console.log('app inside render:', app )
    $('#page').empty().append(app.render().$el)
  },

})

let router = new Router()
export default router
