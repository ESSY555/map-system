import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout from './layout/layout'; // Import your Layout component
import Information from './components/quotes/request-information';



function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap routes with the Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/information" element={<Information />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
