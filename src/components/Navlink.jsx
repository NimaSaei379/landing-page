function Navlink({ to, children }) {
  return (
    <li className="list-none my-3.5 text-stone-500 ">
      <a
        href={to}
        className="no-underline p-3.5 transition-{border} ease hover:text-white hover:border-b-blue-500 hover:border-b-2"
      >
        {children}
      </a>
    </li>
  );
}
export default Navlink;
