import "./App.css";
import Home from "./components/home/home.component";
import HowWeWork from "./components/how-we-work/work.component";
import Navigation from "./Routes/navigation/navigation.component";
import Banner from "./components/banner/banner.component";
import PageFooter from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <HowWeWork />
      <Banner />
      <PageFooter />
    </div>
  );
}

export default App;
