import './App.css';
import Home from "./pages/Home"
import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";



// TODO make everything only get so big. and stay in teh middle for larger screens
function App() {
  return (
    <div className="App bg-[#F8F0E3]">
        <TopNav />
        <NavBar />
        <Home />
    </div>
  );
}

export default App;
