import { FC, memo, useState } from "react";

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Child: FC<Props> = memo(({ handleClick }) => {
  console.log("render Child");
  return <button onClick={handleClick}>Child</button>;
});

export const App = () => {
  console.log("render App");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("test");
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}></button>
      <Child handleClick={handleClick} />
    </>
  );
};
