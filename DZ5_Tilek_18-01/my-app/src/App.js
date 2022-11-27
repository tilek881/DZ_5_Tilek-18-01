import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import CountPage from "./pages/countPage/CountPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
    return (
    <div className="App">
      {/*<MainPage/>*/}
      {/*  <CountPage/>*/}
        <AboutUs/>
        <PortfolioPage/>
        <ContactsPage/>
    </div>
  );
}

export default App;
