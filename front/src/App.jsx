import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Completed from './components/Completed/Completed';
import NaviBar from './components/Common/NaviBar';

const Home = () => <div>Home</div>;

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <NaviBar />
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
