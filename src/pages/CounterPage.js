// import useCounter from "../hooks/use-counter";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import produce from "immer";

//action variables
const incrementCount = "increment";
const decrementCount = "decrement";
const changeValue = "change-value-to-add";
const addValueToCount = "add-value-to-count";

//reducer function
function reducer(state, action) {
  //whatever returned will be the new state
  //never directly update state
  //how to update state
  // if (action.type === "increment") {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // } else if (action.type === "decrement") {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // }

  // if (action.type === "change-value-to-add") {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }
  //always return something

  switch (action.type) {
    case incrementCount:
      return {
        ...state,
        count: state.count + 1,
      };

    case decrementCount:
      return {
        ...state,
        count: state.count - 1,
      };
    case changeValue:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case addValueToCount:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
}

function CounterPage({ initialCount }) {
  //destructure to get the required variables
  // const { count, increment } = useCounter(initialCount);
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);

    //dispatch fucntion in useReducer takes an object with a value
    // to specify the action
    dispatch({
      type: incrementCount,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: decrementCount,
    });
  };

  const handleChange = (event) => {
    //convert input from string to number and set default to zero to prevent NaN bug
    const value = parseInt(event.target.value) || 0;

    //update valueToAdd
    // setValueToAdd(value);

    //needs the payload property
    dispatch({
      type: changeValue,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    //prevent the form from submitting by default
    event.preventDefault();

    //update count
    //setCount(count + valueToAdd);
    //update value to add to 0 when count is updated
    //setValueToAdd(0);
    dispatch({
      type: addValueToCount,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add</label>
        <input
          value={state.valueToAdd || ""} //to prevent 0 from being stuck in the form
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray border border-gray-300"
        />
        <Button>Add to Count</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
