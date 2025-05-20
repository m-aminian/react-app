import Button from "./components/Button";
function App() {
  const hanldeClick = () => {
    console.log("You clicked me");
  };
  return (
    <div>
      <Button text="click me" color="danger" onClick={hanldeClick} />
    </div>
  );
}

export default App;
