function App() {
  const initialTodos = [
    { id: 1, task: "buy a book", done: false },
    { id: 2, task: "wash the car", done: false },
    { id: 3, task: "shopping", done: false },
  ];
  const [todos, updateTodos] = React.useState(initialTodos);
  function prependTodo(todo) {
    todo["id"] = todos[todos.length - 1].id + 1;
    updateTodos([todo, ...todos]);
  }
  function updateTodo(todo) {
    const t = todos.find(t => t.id === todo.id)
    if (t) {
      t.done = todo.done;
      updateTodos([...todos]);
    }
  }
  return (
    <div className="app">
      <AddTodo addHandler={prependTodo} />
      <TodoList todos={todos} updateHandler={updateTodo} />
      <TodoStatus todos={todos} />
    </div>
  );
}
function AddTodo(props) {
  console.log(props);
  return (
    <div className="todo-add">AddTodo</div>
  );
}
function TodoStatus(props) {
  return (
    <div className="todo-status">TodoStatus</div>
  );
}
function Todo(props) {
  const [todo, updateTodo] = React.useState(props.todo);
  function handleChange() {
    todo.done = !todo.done;
    props.updateHandler(todo);
    updateTodo(todo);
  }
  const classes = todo.done ? "todo done" : "todo";
  return (
    <div className={classes}>
      <span className="todo-task"> {props.todo.task} </span>
      <input className="todo-done"
        type="checkbox"
        onChange={handleChange}
        defaultChecked={props.todo.done} />
    </div>
  );
}
function TodoList(props) {
  return (
    <div className="container">
      {props.todos.map(todo => <Todo key={todo.id} todo={todo} updateHandler={props.updateHandler} />)}
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById("root")
);