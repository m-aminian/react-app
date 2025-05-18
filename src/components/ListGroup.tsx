function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Tokyo", "Berlin"];
  items = [];
  //   The code below is not good because we have duplication for h1
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List of items</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //   The below code is not goog because of null
  //   let message = items.length === 0 ? <p>No item found</p> : null;
  //   let getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  return (
    <>
      <h1>List of items</h1>
      {/* {getMessage()} */}
      {/* Short-Circuit Rendering */}
      {items.length === 0 && <p>No item found</p>}
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
