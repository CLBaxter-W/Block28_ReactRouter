import "./App.css";

import NavBar from "./components/NavBar.jsx";
import MainContainer from "./components/MainContainer.jsx";
import FooterBar from "./components/FooterBar.jsx";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello from Router Land!</h1>
        <NavBar />
        <MainContainer />
        <FooterBar />
      </div>
    </>
  );
}

export default App;
