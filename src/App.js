import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AlbumSection from './components/AlbumSection/AlbumSection';
function App() {
  return (
    <div className="app-container">
        <Navbar/>
        <HeroSection/>
        <AlbumSection/>
    </div>
  );
}

export default App;
