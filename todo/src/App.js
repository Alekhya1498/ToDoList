import React from 'react';
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <div>
        <br />
      </div>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function App() {
  /**
   * useState is a React Hooks that replaces traditional React Components.
   * This helps the track the state of each todo item.
   * Because we don't use any DB to store these items.
   */
  const [todos, setTodos] = React.useState([
    {
      text: 'This is a sampe todo',
      isDone: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Allow App.js to be imported by Index.js
export default App;
