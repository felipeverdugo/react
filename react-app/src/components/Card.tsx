import List from "./List";
import { ButtonDef } from "./Button";
import { useState } from "react";

const Card = () => {
  const width = {
    width: "350px",
  };
  const [list, setList] = useState(["item1", "item2", "item3"]);

  const contenido = list.length ? (
    <List data={list}></List>
  ) : (
    "No hay Contenido "
  );

  const agregarElemento = () => {
    const newItem = "Minion";
    setList([...list, newItem]);
  };

  const borrarFinal = () => {
    setList(list.slice(0, -1));
  };

  return (
    <div className="card" style={width}>
      {contenido}
      <ButtonDef onClick={agregarElemento}>Add</ButtonDef>
      <ButtonDef onClick={borrarFinal}>Delete</ButtonDef>
    </div>
  );
};

export default Card;
