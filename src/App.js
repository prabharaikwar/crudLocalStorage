import './App.css';
import Read from './Comp/Read';
import Create from './Comp/Create';
import Update from './Comp/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() { 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Read />} />
          <Route path='/create' element={<Create/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
