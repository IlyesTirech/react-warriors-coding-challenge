import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeekOne from './pages/WeekOne';
import WeekTwo from './pages/WeekTwo';
import WeekThree from './pages/WeekThree';
import WeekFour from './pages/WeekFour';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/week1" element={<WeekOne />} />
          <Route path="/week2" element={<WeekTwo />} />
          <Route path="/week3" element={<WeekThree />} />
          <Route path="/week4" element={<WeekFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
