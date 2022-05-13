import './App.css';
import Home from "./pages/Home"
import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";
import Hours from "./pages/Hours"
import DistrictProject from "./pages/DistrictProject"
import Calendar from "./pages/Calendar" 
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



// TODO make everything only get so big. and stay in the middle for larger screens
function App() {
  return (
    <Router>
      <div className="App bg-[#F8F0E3]">
        <TopNav />
        <NavBar />
        <Routes>
          <Route path="/hours" element={<Hours />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/districtproject" element={<DistrictProject />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
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