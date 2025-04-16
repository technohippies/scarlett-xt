import { Button } from "../../src/components/ui/button";
import { useState } from "react";

export default () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount((count) => count + 1);

  return (
    <div>
      <p>This is React. {count}</p>
      <Button variant="default" size="default" onClick={increment}>
        Increment {count}
      </Button>
    </div>
  );
};
