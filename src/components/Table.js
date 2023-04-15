import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  //
  const headerNames = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });
  const tableItems = data.map((item) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(item)}
        </td>
      );
    });
    return (
      //always add a key
      <tr className="border-b" key={keyFn(item)}>
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{headerNames}</tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </table>
  );
}

export default Table;
