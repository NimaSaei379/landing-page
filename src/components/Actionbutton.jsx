function Actionbutton(props) {
  return (
    <a
      href={props.to}
      className={`text-center py-3.5 px-5 cursor-pointer ${
        props.primary
          ? 'text-white bg-blue-600 hover:bg-blue-400'
          : 'bg-stone-800 text-stone-600 hover:bg-stone-400'
      } 
      `}
    >
      {props.children}
    </a>
  );
}
export default Actionbutton;
