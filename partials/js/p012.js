const todos = [
  { id: 1, task: "buy a book", done: false },
  { id: 2, task: "wash the car", done: true },
  { id: 3, task: "shopping", done: false },
];
class Todo extends React.Component {
  render() {
    const { task, done } = this.props;
    return (
      <div className="todo">
        <sapn className="todo-task"> {task} </sapn>
        <input className="todo-done" type="checkbox" defaultChecked={done} />
      </div>
    );
  }
}
class TodoList extends React.Component {
  render() {
    const todos = this.props.todos;
    return (
      <div className="container">
        {todos.map(todo => <Todo key={todo.id} task={todo.task} done={todo.done} />)}
      </div>
    );
  }
}
ReactDOM.render(
  <TodoList todos={todos} />,
  document.getElementById("root")
);