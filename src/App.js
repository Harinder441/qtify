import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AlbumCard from './components/Card/AlbumCard';
function App() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AlbumCard/>
    </div>
  );
}

export default App;
