import UserInput from "./component/UserInput";
import "./App.css";
import SearchBar from "./component/SearchBar";
import UserInformation from "./component/UserInformation";
import WelcomeScreen from "./component/WelcomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>        
    
        <BrowserRouter>     
          <Routes>
            <Route path="/" element={<UserInput />} />
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/info" element={<UserInformation />} />
          </Routes>         
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
