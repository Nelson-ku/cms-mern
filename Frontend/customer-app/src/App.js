
import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';

import Customerlist from './pages/Customerlist';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Search/>
       <Customerlist/>
    </div>
  );
}

export default App;
