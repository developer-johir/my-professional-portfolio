import { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
