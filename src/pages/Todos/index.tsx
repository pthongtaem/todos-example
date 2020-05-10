import React from 'react';
import Filter from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/TodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Filter />
  </div>
);

export default App;
