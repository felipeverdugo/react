import { ReactNode, useState, Dispatch, SetStateAction } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

function Button({ children }: Props) {
  const [text, setText] = useState(children);
  const [button, setButton] = useState("btn btn-primary");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setText("cargando...");
    setButton("btn btn-secondary");
    setIsDisabled(true);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className={button}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

export const ButtonDef = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-primary">
      {" "}
      {children}
    </button>
  );
};
