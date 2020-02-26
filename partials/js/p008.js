function Todo(props) {
  const { task, done } = props;
  return (
    <div className="todo">
      <span className="todo-task"> {task} </span>
      <input
        className="todo-done"
        type="checkbox"
        defaultChecked={done}
      />
    </div>
  );
}
ReactDOM.render(
  <Todo task="Do something" done={true} />,
  document.getElementById("root")
);