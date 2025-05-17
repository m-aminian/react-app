import { Fragment } from "react";
function ListGroup() {
  const items = ["New York", "San Francisco", "London", "Tokyo", "Berlin"];
  return (
    <>
      <h1>List of items</h1>
      <ul className="list-group">
        {items.map((item) => (
          // check the error before applying the key prop
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
