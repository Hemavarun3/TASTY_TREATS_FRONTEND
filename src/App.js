import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./component/footer";


function App() {
  
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-20 min-h-[calc(100vh)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
