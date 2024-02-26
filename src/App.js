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
        <AlbumSection title={"Top Albums"} apiUrl='https://qtify-backend-labs.crio.do/albums/top'/>
        <AlbumSection title={"New Albums"} apiUrl='https://qtify-backend-labs.crio.do/albums/new'/>
        <AlbumSection title={"Songs"} apiUrl='https://qtify-backend-labs.crio.do/songs' type="song"/>
    </div>
  );
}

export default App;
