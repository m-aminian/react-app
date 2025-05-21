import { useState } from "react";
// so the styles is like a regular javascript object that has all the classes defined in this file.
import styles from "./ListGroup.module.css";
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List of {heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles["list-group"], styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
