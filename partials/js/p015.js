const todos = [
  { id: 1, task: "buy a book", done: false },
  { id: 2, task: "wash the car", done: false },
  { id: 3, task: "shopping", done: false },
];
function Todo(props) {
  const [done, setDone] = React.useState(props.done);
  function handleChange() {
    setDone(!done);
  }
  const classes = done ? "todo done" : "todo";
  return (
    <div className={classes}>
      <span className="todo-task"> {props.task} </span>
      <input className="todo-done"
        type="checkbox"
        onChange={handleChange}
        defaultChecked={props.done} />
    </div>
  );
}
function TodoList(props) {
  return (
    <div className="container">
      {props.todos.map(todo => <Todo key={todo.id} task={todo.task} done={todo.done} />)}
    </div>
  );
}
ReactDOM.render(
  <TodoList todos={todos} />,
  document.getElementById("root")
);