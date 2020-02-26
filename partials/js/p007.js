function Todo(props) {
  return (
    <h1>{props.task} to do now!</h1>
  );
}
ReactDOM.render(
  <Todo task="Something" />,
  document.getElementById("root")
);