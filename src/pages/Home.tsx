import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    // Eliminamos la variable tools ya que no se está utilizando
    return (
      <>
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-background"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
  
        <div className="center-container">
          <div className="link-container">
            <a href="https://blog-sanda.vercel.app/" className="left-link no-copy">BLOG</a>
            <Link to="/docs" className="right-link no-copy">DOCS</Link>
          </div>
        </div>
      </>
    );
  }
export default Home;
