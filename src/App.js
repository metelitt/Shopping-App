import { Arrivals } from "./components/arrivals";
import { Brand } from "./components/brands";
import { Header } from "./components/header";
import { Promo } from "./components/promo";

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Brand/>
      <Arrivals/>
    </div>
  );
}

export default App;
