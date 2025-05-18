import type { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Tokyo", "Berlin"];
  const hanldeClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List of items</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          //   <li
          //     className="list-group-item"
          //     key={item}
          //     onClick={(event) => {
          //       console.log(event);
          //     }}
          //   >
          <li className="list-group-item" key={item} onClick={hanldeClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
