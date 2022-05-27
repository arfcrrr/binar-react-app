import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Cars } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
