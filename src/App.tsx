import { useState } from "react";
// React updates state asynchronously meaning not immediately
// State is stored outside of a component
// Use hooks at the top level of your component
// avoid redundant state variables(anything that can be computed from the existing state variables)
function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const [isLoading, setLoading] = useState(false);
  return <div></div>;
}

export default App;
