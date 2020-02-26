function App() {
  const initialTodos = [
    { id: 1, task: "buy a book", done: false },
    { id: 2, task: "wash the car", done: true },
    { id: 3, task: "shopping", done: false },
  ];
  const [todos, updateTodos] = React.useState(initialTodos);
  function prependTodo(todo) {
    todo["id"] = Math.max(...todos.map(t => t.id)) + 1;
    todos.unshift(todo);
    updateTodos([...todos]);
  }
  function sort(todos) {
    return todos.sort((t1, t2) => {
      return (t1.done === t2.done) ? ((t1.id > t2.id) ? 1 : -1) : t1.done ? 1 : -1;
    })
  }
  function updateTodo(todo) {
    const t = todos.find(t => t.id === todo.id)
    if (t) {
      t.done = todo.done;
      sort(todos);
      console.log(todos);
      updateTodos([...todos]);
    }
  }
  return (
    <div className="app">
      <AddTodo addHandler={prependTodo} />
      <TodoList todos={sort(todos)} updateHandler={updateTodo} />
      <TodoStatus todos={todos} />
    </div>
  );
}
function AddTodo(props) {
  const [task, setTask] = React.useState("");
  function handleChange(evt) {
    setTask(evt.target.value);
  }
  function handleClick() {
    if (task.length < 3)
      return;
    props.addHandler({ task, done: false });
    setTask("");
  }
  return (
    <div className="todo-add">
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleClick}>+</button>
    </div>
  );
}
function TodoStatus(props) {
  const doneTodos = props.todos.filter(todo => todo.done).length;
  const todosLength = props.todos.length;
  const status = doneTodos + " of " + todosLength;
  return (
    <div className="todo-status">{status}</div>
  );
}
function Todo(props) {
  const [todo, updateTodo] = React.useState(props.todo);
  function handleClick() {
    todo.done = !todo.done;
    props.updateHandler(todo);
    updateTodo(todo);
  }
  const classes = todo.done ? "todo done" : "todo";
  return (
    <div className={classes} onClick={handleClick}>
      <span className="todo-task"> {props.todo.task} </span>
      <input className="todo-done"
        type="checkbox"
        onChange={() => console.log('changed !!')}
        checked={props.todo.done}
      />
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