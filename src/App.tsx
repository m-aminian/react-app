import { useState } from "react";
// React updates state asynchronously meaning not immediately
// State is stored outside of a component
// Use hooks at the top level of your component
function App() {
  const [isVisible, setVisibility] = useState(false);
  let count = 0;
  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible);
  };
  return (
    <div>
      <button onClick={handleClick}>show</button>
    </div>
  );
}

export default App;
