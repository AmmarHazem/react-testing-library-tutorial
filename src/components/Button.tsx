import { type FC } from "react";

const Button: FC<ButtonProps> = ({ count, setCount }) => {
  return <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>;
};

interface ButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default Button;
