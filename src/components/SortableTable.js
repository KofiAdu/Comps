import useSort from "../hooks/use-sort";
import Table from "./Table";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function SortableTable(props) {
  const { config, data } = props;

  //destructuring hook props
  const { handleClick, sortBy, sortOrder, sortedData } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <BiUpArrow />
        <BiDownArrow />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <BiUpArrow />
        <BiDownArrow />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <BiUpArrow />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <BiDownArrow />
      </div>
    );
  }
}

export default SortableTable;
