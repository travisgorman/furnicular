import Backbone from 'backbone'
import $ from 'jquery'
import session from './models/session'
import AppView from './views/AppView'
import LoginView from './views/LoginView'
import SignupView from './views/SignupView'
import HeaderView from './views/HeaderView'
import settings from './settings'

const Router = Backbone.Router.extend({
  routes: {
    login           : 'loginF',
    signup          : 'signupF',
    logout          : 'logoutF',
    app             : 'appF',
    '/*'            : 'loginF',
  },

  loginF() {
    if (!session.get('username')) {
      if (localStorage.getItem('authtoken')) {
        session.retrieve()
        this.navigate('app', {trigger: true})
      } 
      else {
        let login = new LoginView()
        $('#page').empty()
          .append(login.render().$el)
      }
    }
  },

  signupF() {
    let signup = new SignupView()
    $('#page').empty()
      .append(signup.render().$el)
  },

  logoutF() {
    session.save(null, {
      url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
      success: () => {
        window.localStorage.clear()
        session.clear()
        console.log('You are LOGGED OUT:', session )
        this.navigate('login', { trigger: true })
      }
    })
  },

  appF: function() {
    let app = new AppView()
    let nav = new HeaderView()
    $('#page').empty()
      .append(nav.render().$el)
        .append(app.render().$el)
  },

})

let router = new Router()
export default router
