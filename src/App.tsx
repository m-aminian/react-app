import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const hanldeShowAlert = () => {
    setShowAlert(true);
  };
  const hanldeCloseAlert = () => {
    setShowAlert(false);
  };
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && <Alert onClick={hanldeCloseAlert}>This is a warning</Alert>}
      <Button text="click me" onClick={hanldeShowAlert} />
    </div>
  );
}

export default App;
