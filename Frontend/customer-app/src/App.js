
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import HandleSubmit from './components/HandleSubmit';

import Customerlist from './pages/Customerlist';
import Login from './components/login';

function App() {
  return (

    <Router>
        <Routes>
          <Route path='/' element={<Login></Login>} />
          <Route path='/customerlist/'element={<Customerlist/>} />
          <Route path='/update/:id' element={<HandleSubmit/>}/>
        </Routes>
    </Router>
         
    
  );
}

export default App;
