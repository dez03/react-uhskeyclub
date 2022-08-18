import './App.css';
import Home from "./pages/Home"
import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Hours from "./pages/Hours"
import Dues from "./pages/Dues"
import DistrictProject from "./pages/DistrictProject"
import Calendar from "./pages/Calendar"
import Mission from "./pages/Mission" 
import Members from "./pages/Members"
import Gallery from "./pages/Gallery"
import Newsletters from "./pages/Newsletters"
import Advisors from "./pages/Advisors"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';




// TODO make everything only get so big. and stay in the middle for larger screens
// TODO add social icons to the top nav bar
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App bg-[#F8F0E3]">
        <TopNav />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/districtproject" element={<DistrictProject />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/dues" element={<Dues />} />
          <Route path="/members" element={<Members />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/advisors" element={<Advisors />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

/* 
<div className="App bg-[#F8F0E3]">
  <TopNav />
  <NavBar />
  <Home />
</div>; */

 {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hours" element={<Hours />} />
        
      </Routes>
    </Router> */}