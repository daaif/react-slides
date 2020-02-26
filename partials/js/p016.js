const todos = [
  { id: 1, task: "buy a book", done: true },
  { id: 2, task: "wash the car", done: true },
  { id: 3, task: "shopping", done: false },
];
class Todo extends React.Component {
  state = { done: this.props.done };
  handleChange = () => {
    this.setState({ done: !this.state.done });
  }
  render() {
    const { task, done } = this.props;
    const classes = this.state.done ? "todo done" : "todo";
    return (
      <div className={classes}>
        <span className="todo-task"> {task} </span>
        <input className="todo-done"
          type="checkbox"
          onChange={this.handleChange}
          defaultChecked={done} />
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