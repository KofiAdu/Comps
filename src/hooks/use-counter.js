import { useState, useEffect } from "react";

//creating a customHook
//give this function a param because the component requires a prop
function useCounter(initialCount) {
  //find all th components related to the useState hook except the jsx
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  //return an object of everything we need
  return {
    count,
    increment,
  };
}

export default useCounter;
