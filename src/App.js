import "./components/common/background.css";
import { BrowserRouter as Router, Route,Routes, Redirect, Navigate } from "react-router-dom";
import Main from "./pages/main/main";
import PageTemplatePage from "./components/page-template/page-template"

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/page/:id" element = {<PageTemplatePage/>}></Route>
        <Route path = "/" exact Component={Main}></Route>
      </Routes>
    </Router>
  );
}

export default App;
