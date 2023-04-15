import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //defining event handler outside the mapping funtion
  const handleClick = (nextIndex) => {
    //toggling panel collapse
    //functional state updates
    setExpandedIndex((currentIndex) => {
      if (currentIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
    /*Normal state updates*/
    //toggling panel collapse
    // if (expandedIndex === nextIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(nextIndex);
    // }
  };

  //displaying the items in the array
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = <span>{isExpanded ? <BiDownArrow /> : <BiLeftArrow />}</span>;
    return (
      //every list item needs a unique id
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* <div>{item.content}</div> */}
        {/* conditional rendering. display if isExpanded is true */}
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
