import { BrowserRouter, Routes, Route } from "react-router-dom";
//PAGES
import Home from "../pages/Home";
import { WorkoutContextProvider } from "./context/WorkoutContext";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Navbar from "./components/Navbar";

function App() {



  return (
    <WorkoutContextProvider>
      <div className="App">
        <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

            </Routes>
          </div>
        </BrowserRouter>
      </div>
      </WorkoutContextProvider>
  );
}

export default App;
