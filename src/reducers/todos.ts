import {
  TodosState,
  TodosActionTypes,
  ADD_TODO,
  TOGGLE_TODO,
  AddTodoAction,
  ToggleTodoAction,
} from './types/todos';

const todos = (state: TodosState[] = [], action: TodosActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payloads.id,
          text: action.payloads.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo: TodosState) => {
        return todo.id === action.payloads.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};

export default todos;

let nextTodoId = 0;
export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payloads: {
    id: nextTodoId++,
    text,
  },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payloads: {
    id,
  },
});
