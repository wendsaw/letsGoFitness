import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import pub5 from './assets/pub5.png'; // Make sure the image is placed in /src/assets/
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={pub5} alt="Let'sGo Fitness Promo" style={{ width: '100%', maxWidth: '500px' }} />
      </div>
      
    </>
  );
}

export default App;
