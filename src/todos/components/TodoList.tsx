import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo';
import {
  VisibilityFilters,
  TodosState,
} from '../../reducers/types/visibilityFilter';
import { RootState } from '../../reducers';
import { toggleTodo } from '../../reducers/todos';

const getVisibleTodos = (todos: TodosState[], filter: VisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const TodoList = () => {
  const todos = useSelector((state: RootState) =>
    getVisibleTodos(state.todos, state.visibilityFilter),
  );
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
    </ul>
  );
};

export default TodoList;
