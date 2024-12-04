import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

// Componente wrapper para el video
const AppContent = () => {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname === '/' && (
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-background"
          >
            <source src="https://imgur.com/u5CH0pO" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
      )}
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
