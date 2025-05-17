import { Fragment } from "react";
function ListGroup() {
  //   return (
  //     // A component cannot return more than one element
  //     <div>
  //       <h1>List of items</h1>
  //       <ul className="list-group">
  //         <li className="list-group-item">An item</li>
  //         <li className="list-group-item">A second item</li>
  //         <li className="list-group-item">A third item</li>
  //         <li className="list-group-item">A fourth item</li>
  //         <li className="list-group-item">And a fifth one</li>
  //       </ul>
  //     </div>
  //   );

  //   return (
  //     <Fragment>
  //       <h1>List of items</h1>
  //       <ul className="list-group">
  //         <li className="list-group-item">An item</li>
  //         <li className="list-group-item">A second item</li>
  //         <li className="list-group-item">A third item</li>
  //         <li className="list-group-item">A fourth item</li>
  //         <li className="list-group-item">And a fifth one</li>
  //       </ul>
  //     </Fragment>
  //   );
  return (
    <>
      <h1>List of items</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
