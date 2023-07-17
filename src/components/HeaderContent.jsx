import Actionbutton from './Actionbutton';
import Navbar from './Navbar';

function HeaderContent() {
  return (
    <div className="w-full bg-stone-800">
      <header className="flex items-center justify-between h-full">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="m-0">
          <Actionbutton to="#">sign up</Actionbutton>
          <Actionbutton primary to="#">
            Download
          </Actionbutton>
        </div>
      </header>
    </div>
  );
}
export default HeaderContent;
