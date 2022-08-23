import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import AboutPage from "./Components/AboutPage/AboutPage";
import AdminPage from "./Components/AdminPage/AdminPage";
import LoginPage from "./Components/LoginPage/LoginPage";


function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<AboutPage/>}/>
          <Route path='admin' element={<AdminPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
