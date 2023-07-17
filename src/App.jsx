import { useState } from 'react';
import HeaderContent from './components/HeaderContent';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black h-screen flex flex-col">
      <HeaderContent></HeaderContent>
      <h1 className="text-white text-2xl">epic Game</h1>
    </div>
  );
}

export default App;
