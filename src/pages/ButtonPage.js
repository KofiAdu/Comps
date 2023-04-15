import Button from "../components/Button";
import { Gi3DGlasses, GiAbstract042 } from "react-icons/gi";

function ButtonPage() {
  function handleClick() {}

  function handleClick2() {}
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-2">
          <Gi3DGlasses />
          Click Here
        </Button>
      </div>
      <div>
        <Button secondary outline onClick={handleClick2}>
          <GiAbstract042 />
          Click!
        </Button>
      </div>
      <div>
        <Button success>Click!!</Button>
      </div>
      <div>
        <Button warning>Click!!!</Button>
      </div>
      <div>
        <Button danger>Click!!!!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
