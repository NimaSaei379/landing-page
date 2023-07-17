import Navlink from './Navlink';

function Navbar() {
  return (
    <nav className="flex flex-row justify-start grow">
      <Navlink to="#">store</Navlink>
      <Navlink to="#">store</Navlink>
      <Navlink to="#">store</Navlink>
    </nav>
  );
}
export default Navbar;
