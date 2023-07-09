import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SingleRestaurant from './components/SingleRestaurant';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/restaurant/:id" element={<SingleRestaurant />} />
        </Routes>
    </Router>
  );
};

export default App;
