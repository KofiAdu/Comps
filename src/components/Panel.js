//creating a reusable component
import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  //...rest if for any extra props that will be added to the component
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    //...rest for any extra props
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
