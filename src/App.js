import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/:restraunt" element={<Review />}/>
</Routes>
    </div>
  );
}

export default App;
