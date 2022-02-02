import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {setAlert({
    message: message,
    type: type})

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been Enabled","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled","success");
    }
  }
  return (
    <>
    {/* <Navbar title = 'TextUtils' home = 'Home' aboutme = 'About Me'/> */}
    <Router>
    <Navbar aboutme="About Me" mode = {mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm mode={mode} showAlert = {showAlert}/>}>
          </Route>
        </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;
