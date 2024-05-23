import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-20 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
