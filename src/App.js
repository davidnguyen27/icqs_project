import "./App.css";
import SocialMediaIcons from "./Components/SocialMediaIcons";
import DetailProperty from "./Components/property/DetailProperty";
import Footer from "./Components/Footer";
import ContractQuotations from "./Components/ContractQuotaions";

function App() {
  return (
    <div className="App">
    <DetailProperty/>
      <SocialMediaIcons />
      <ContractQuotations/>
      <Footer/>
    </div>
  );
}

export default App;
