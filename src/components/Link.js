import classNames from "classnames";
import useNavigation from "../hooks/use-naviagtion";

//to = path
//children = whatever will be shown in the 'a tag'
//className = a prop to allow for additional styling for specific components
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    //handling ctrl and cmd keys
    if (event.metaKey || event.ctrKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a onClick={handleClick} href={to} className={classes}>
      {children}
    </a>
  );
}

export default Link;
