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
import Officers from "./pages/Officers"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import ArchivedNewsletters from "./pages/ArchivedNewsletters"
import Partners from "./pages/Partners"
import ReactGA from 'react-ga';
import { Component } from "react";

// TODO fix the buttons and months on the calendar for small mobile
// TODO add social icons to the top nav bar
// TODO add 404 page
// TODO add senior,jr,sohpomore,freshmen buttom right scroll button
// TODO add scroll to top button on every page?
// TODO Style the partners page like https://tokeyclub.com/partnerships
// TODO finish mission page
// TODO add contact info on officer page




class App extends Component {
  setGA = () => {
    ReactGA.initialize('G-ZMNH42F7NE');
    ReactGA.pageview('Init page view');
  };
  componentDidMount(){
    this.setGA();
  }
render() {
    return (
    <Router>
      <ScrollToTop />
      <div className="App bg-[#F8F0E3] ">
        <div>
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
            <Route path="/officers" element={<Officers />} />
            <Route path="/partners" element={<Partners />} />
            <Route
              path="/ArchivedNewsletters"
              element={<ArchivedNewsletters />}
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
  }
}
export default App;

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="App bg-[#F8F0E3] ">
//         <div>
//           <TopNav />
//           <NavBar />

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/hours" element={<Hours />} />
//             <Route path="/calendar" element={<Calendar />} />
//             <Route path="/districtproject" element={<DistrictProject />} />
//             <Route path="/mission" element={<Mission />} />
//             <Route path="/dues" element={<Dues />} />
//             <Route path="/members" element={<Members />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/newsletters" element={<Newsletters />} />
//             <Route path="/advisors" element={<Advisors />} />
//             <Route path="/officers" element={<Officers />} />
//             <Route path="/partners" element={<Partners />} />
//             <Route
//               path="/ArchivedNewsletters"
//               element={<ArchivedNewsletters />}
//             />
//           </Routes>
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

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