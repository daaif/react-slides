const todos = [
  { id: 1, task: "buy a book", done: false },
  { id: 2, task: "wash the car", done: false },
  { id: 3, task: "shopping", done: false },
];
function Todo(props) {
  const { task, done } = props;
  return (
    <div className="todo">
      <span className="todo-task"> {task} </span>
      <input className="todo-done" type="checkbox" defaultChecked={done} />
    </div>
  );
}
function TodoList(props) {
  return (
    <div className="container">
      {props.todos.map(todo => <Todo task={todo.task} done={todo.done} />)}
    </div>
  );
}
ReactDOM.render(
  <TodoList todos={todos} />,
  document.getElementById("root")
);