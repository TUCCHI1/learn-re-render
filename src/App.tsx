import { FC, memo, useCallback, useMemo, useState } from "react";

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Child: FC<Props> = memo(({ handleClick }) => {
  console.log("render Child");
  return <button onClick={handleClick}>Child</button>;
});

export const App = () => {
  console.log("render App");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = (count: number) => {
    let i = 0;
    // 無駄なループでわざと時間をかけている
    while (i < 3000000) i++;
    return count * 2;
  };

  const Counter = useMemo(() => {
    console.log("render Counter");
    const doubleCount = double(count2);
    return (
      <p>
        Counter: {count2}, {doubleCount}
      </p>
    );
  }, [count2]);

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>count up</button>
      <h2>Increment count2</h2>
      {Counter}
      <button onClick={() => setCount2(count2 + 1)}>count2 up</button>
    </>
  );
};
