const name = "momo";
const element = <div
  className="big"
  style={{ fontFamily: "arial" }}
  title="un exemple JSX">
  Hello {name} !
</div>;

ReactDOM.render(
  element,
  document.getElementById("root")
);
