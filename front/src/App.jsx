import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Completed from './components/Completed';
import Important from './components/Important';
import Proceeding from './components/Proceeding';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/important" element={<Home />} />
          <Route path="/proceeding" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
