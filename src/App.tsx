import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import RightBar from "./components/Right/RightBar";

function App() {
  return (
    <>
      <div className="grid grid-cols-[250px_1fr] grid-rows-[auto_1fr] h-screen bg-main-dark">
        <div className="col-span-2">
          <Header />
        </div>
        <div className="mt-16">
          <Sidebar />
        </div>
        <main className="mt-16 p-6 ml-16 translate-x-2 bg-[#f5f5f5] flex justify-between gap-6 rounded-l-[20px]">
          <Hero />
          <RightBar />
        </main>
      </div>
    </>
  );
}

export default App;