import React from 'react';
import { Layout } from 'antd';
import Filter from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/TodoList';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header style={{ background: '#ffffff' }}>
      <AddTodo />
    </Header>
    <Content style={{ background: '#ffffff' }}>
      <VisibleTodoList />
    </Content>
    <Footer>
      <Filter />
    </Footer>
  </Layout>
);

export default App;
