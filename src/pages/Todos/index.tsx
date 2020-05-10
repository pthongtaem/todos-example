import React from 'react';
import { Layout } from 'antd';
import Filter from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/TodoList';

const { Header, Content, Footer } = Layout;

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Filter />
  </div>
);

export default App;
