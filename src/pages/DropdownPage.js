import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };
  const options = [
    { label: "Accra", value: "Ghana" },
    { label: "Helsinki", value: "Finland" },
    { label: "Rome", value: "Italy" },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} value={selected} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
