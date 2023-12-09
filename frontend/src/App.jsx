import { BrowserRouter, Routes, Route } from "react-router-dom";
//PAGES
import Home from "../pages/Home";
import { Navbar } from "./components/navbar";
import { WorkoutContextProvider } from "./context/WorkoutContext";

function App() {



  return (
    <WorkoutContextProvider>
      <div className="App">
        <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      </WorkoutContextProvider>
  );
}

export default App;
