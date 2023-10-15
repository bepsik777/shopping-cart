import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-blue-300 min-h-screen flex flex-col">
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
    </div>
  );
}

export default App;

