#Bookish


```html
<section id="todoapp">
    <header id="header">
      <h1>todos</h1>
      <input id="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
    <section id="main">
      <input id="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul id="todo-list"></ul>
    </section>
    <footer id="footer"></footer>
  </section>
  <div id="info">
    <p>Double-click to edit a todo</p>
    <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </div>
```

```html

    <div class="view">
      <input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
      <label><%= title %></label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="<%= title %>">
```