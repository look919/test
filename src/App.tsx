import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}

const _App = ({ todos, fetchTodos, deleteTodo }: AppProps) => {
  const handleClick = async () => {
    await fetchTodos();
  };
  console.log(todos);
  return (
    <div>
      <button onClick={handleClick}>Fetch</button>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => deleteTodo(todo.id)}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  todos: state.todos,
});

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
