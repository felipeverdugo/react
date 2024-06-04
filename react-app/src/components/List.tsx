import { useState } from "react";

type Props = {
  data: string[];
};
const List = ({ data }: Props) => {
  const [index, setIndex] = useState(-1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <div>
      <ul className="list-group">
        {data.map((name, i) => (
          <li
            onClick={() => handleClick(i)}
            className={`list-group-item ${i == index ? "active" : ""}`}
            key={i}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
