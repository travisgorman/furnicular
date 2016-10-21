import Backbone from 'backbone'
import session from '../models/session'
import $ from 'jquery'

const Nav = Backbone.View.extend({
  initialize: function() {},
  tagName: 'nav',
  className: 'header-nav',
  template: function() {
    return `
      <a href="#logout">Get Out</a>
    `
  },
  render: function() {
    this.$el.html(this.template)
    return this
  }
})

export default Nav