import { useState, useEffect, useRef } from "react";
import { BiDownArrow } from "react-icons/bi";

//importing resuable component
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  //calling a reference to the root div
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      //if for the some reason we toggle the visibility of the div
      if (!divEl.current) {
        return;
      }

      //useRef prints references an object and not the direct element we're looking for
      //   //divEl.current is to target the element we want.
      //   console.log(divEl.current);
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    //turn off event handler
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    //setting is Open to the opposite of its current value instead of hard coding it
    //using a functional update
    // setIsOpen((currentIsOpen) => !currentIsOpen)
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //close dropdown
    setIsOpen(false);

    //setting the selected item
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    //using the value in the array of options as the key
    return (
      //if the function needs a parameter, the call is as a callback function in onClick
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  //   let content = "Select to see Capital";
  //   if (selected) {
  //     content = selected.label;
  //   }
  return (
    <div ref={divEl} className="w-48 relative">
      {/* <div onClick={handleClick}>{content}</div> */}
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {/* JS check helper to check if a variable is undefined or not = "selected?"*/}
        {value?.label || "Select to see Capital"}
        <BiDownArrow />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
