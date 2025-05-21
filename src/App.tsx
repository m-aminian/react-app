// import ListGroup from "./components/ListGroup/ListGroup";
import ListGroup from "./components/ListGroup";
function App() {
  const cities = ["Los Angeles", "Berlin", "Kuala Lumpur"];
  return <ListGroup items={cities} heading="Cities"></ListGroup>;
}

export default App;
