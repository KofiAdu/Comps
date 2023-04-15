import useNavigation from "../hooks/use-naviagtion";

function Route({ path, children }) {
  //get access to current path in NavigationContext
  const { currentPath } = useNavigation();
  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
