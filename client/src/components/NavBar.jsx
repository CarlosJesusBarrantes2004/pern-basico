import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New task</Link>
    </nav>
  );
};

export default NavBar;
